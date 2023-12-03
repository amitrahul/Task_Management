import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTasks } from "../../redux/taskSlice";
const Dashboard = () => {
  const taskList = useSelector((state) => state.task);
  const { AllTasks } = taskList;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;
  let pendingTask = [];
  let completedTask = [];
  let doingTask = [];
  for (let i = 0; i < AllTasks.length; i++) {
    if (AllTasks[i].status === "todo") {
      pendingTask.push(AllTasks[i]);
    } else if (AllTasks[i].status === "done") {
      completedTask.push(AllTasks[i]);
    } else if (AllTasks[i].status === "doing") {
      doingTask.push(AllTasks[i]);
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);
  return (
    <div>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_left}>
          <Sidebar />
        </div>
        <div className={styles.dashboard_right}>
          <div className={styles.dashboard_right_header}>
            <h2>Task Status Dashboard</h2>
          </div>
          <div className={styles.taskCount}>
            <div className={styles.todo}>Todo : {pendingTask.length}</div>
            <div className={styles.done}>Complete : {completedTask.length}</div>
            <div className={styles.doing}>Doing : {doingTask.length}</div>
          </div>
          <div className={styles.createButton}>
            <Link to="/taskmanager">
              <Button btnText={"Create Task"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
