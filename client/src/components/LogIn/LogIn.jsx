import { useState } from "react";
import Button from "../Button/Button";
import styles from "./LogIn.module.css";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authslice";
import { Link } from "react-router-dom";
const LogIn = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signin({
        email: state.email,
        password: state.password,
      })
    );
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state.email, state.password);
  return (
    <>
      <div className={styles.logIn_form}>
        <div className={styles.logIn_form_wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <div className={styles.form_group}>
              <input
                type="email"
                name="email"
                id="maill"
                placeholder="Enter Email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_group}>
              <input
                type="password"
                name="password"
                id="pwdd"
                placeholder="Enter password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_group}>
              <Button btnText={"Log In"} />
            </div>
            <h3>
              New User, <Link to="/signup"> Register Now</Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
