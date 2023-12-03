import styles from "./Home.module.css";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  return (
    <div className={styles.home}>
      <div className={styles.home_Container}>
        <h2>Organize it all</h2>
        <p>with TaskManager</p>
        {currentUser && currentUser.token ? (
          <Link to="/dashboard">
            <Button btnText={"Get Started"} />
          </Link>
        ) : (
          <Link to="/logIn">
            <Button btnText={"Get Started"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
