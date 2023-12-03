import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../../redux/authslice";
import history from "../../history";

const NavBar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem("auth");
    history.push("/logIn");
    window.location.reload();
  };
  return (
    <nav className={styles.header}>
      <Logo />
      <div className={styles.header__buttons}>
        {auth.currentUser && auth.currentUser.token ? (
          <Link to={"/logIn"} onClick={handleClick}>
            <Button btnText={"Sign Out"} />
          </Link>
        ) : (
          <>
            <Link to="/logIn">
              <Button btnText={"Sign In"} />
            </Link>
            <Link to={"/signup"}>
              <Button btnText={"Sign Out"} />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
