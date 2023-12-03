import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";
import ListCard from "./ListCard";
import styles from "./TaskList.module.css";

const TaskList = () => {
  const auth = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.task);
  const { currentUser } = auth;
  const { AllTasks } = tasks;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);
  return (
    <div>
      <ul className={styles.listHeader}>
        <li>
          <h3>Id</h3>
        </li>
        <li>
          <h3 className={styles.issue}>Issue Name</h3>
        </li>
        <li>
          <h3 className={styles.status}>Status</h3>
        </li>
        <li>
          <h3>Action</h3>
        </li>
      </ul>
      {Object.values(AllTasks).map((item) => {
        return <ListCard key={item._id} items={item} />;
      })}
    </div>
  );
};

export default TaskList;
