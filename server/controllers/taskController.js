const User = require("../../database/model/user.model");
const Task = require("../../database/model/task.model");

const addTask = async (req, res) => {
  const { task, id } = req.body;
  try {
    if (!task) return res.status(400).send("please enter the task");
    if (task.length < 10) res.status(400).send("add minimum 10 charachter");
    const taskDetail = await new Task({
      task,
      createdBy: id,
    });
    await taskDetail.save();
    return res.status(200).send(taskDetail);
  } catch (error) {
    res.status(400).send("task addition failed");
  }
};

const getAllTasks = async (req, res) => {
  const { id } = req.query;
  try {
    let taskList = await Task.find({ createdBy: id });
    console.log(taskList);
    return res.status(200).send(taskList);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const statusChange = async (req, res) => {
  const { id, string } = req.body;
  try {
    let task = await Task.findById({ _id: id });
    if (string === "right") {
      if (task.status === "backlog") {
        task.status = "todo";
        task.save();
        return res.send(task);
      } else if (task.status === "todo") {
        task.status = "doing";
        task.save();
        return res.send(task);
      } else if (task.status === "doing") {
        task.status = "done";
        task.save();
        return res.send(task);
      }
    } else {
      if (task.status === "done") {
        task.status = "doing";
        task.save();
        return res.send(task);
      } else if (task.status === "doing") {
        task.status = "todo";
        task.save();
        return res.send(task);
      } else if (task.status === "todo") {
        task.status = "backlog";
        task.save();
        return res.send(task);
      }
    }
  } catch (error) {
    res.status(400).send("status change Failed");
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    let response = await Task.findByIdAndDelete(id);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).send("Delete Failed");
  }
};

module.exports = {
  addTask,
  getAllTasks,
  statusChange,
  deleteTask,
};
