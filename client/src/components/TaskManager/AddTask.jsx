import { useState } from "react";
import styles from "./AddTask.module.css";
import Button from "../Button/Button";
import { addTask } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
const AddTask = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  const [state, setState] = useState({
    task: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(state.task, currentUser.id));
    setState({
      task: "",
    });
  };
  return (
    <div>
      <div className={styles.addtask}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="add your task"
            onChange={handleChange}
            value={state.task}
          />
          <Button btnText={"Add Task"} />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
