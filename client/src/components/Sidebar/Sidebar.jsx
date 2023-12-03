import styles from "./Sidebar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div>
      <ul className={styles.sidebar}>
        <li className={styles.list_item}>
          <h3>{currentUser.username}</h3>
        </li>
        <li className={styles.list_item}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
