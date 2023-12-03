import Sidebar from "../../components/Sidebar/Sidebar";
import AddTask from "../../components/TaskManager/AddTask";
import TaskList from "../../components/TaskManager/TaskList";
import styles from "./TaskManager.module.css";
const TaskManager = () => {
  return (
    <>
      <div className={styles.taskmanager}>
        <div className={styles.taskmanager_left}>
          <Sidebar />
        </div>
        <div className={styles.taskmanager_right}>
          <div className={styles.taskmanager_addTask}>
            <AddTask />
          </div>
          <div className={styles.taskmanager__tasklist}>
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManager;
