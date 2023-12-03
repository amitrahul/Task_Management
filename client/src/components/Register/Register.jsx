import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Register.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authslice";

const Register = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: state.username,
        password: state.password,
        email: state.email,
        role: state.role,
      })
    );
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className={styles.register_form}>
        <div className={styles.register_form_wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className={styles.form_group}>
              <input
                type="text"
                placeholder="Enter UserName"
                name="username"
                value={state.username}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_group}>
              <input
                type="email"
                name="email"
                id="mail"
                value={state.email}
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_group}>
              <input
                type="password"
                name="password"
                id="pwd"
                value={state.password}
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_group}>
              <div className={styles.roleSelection}>
                <lable>Admin</lable>
                <input
                  type="radio"
                  name="role"
                  id="admin"
                  value="Admin"
                  onChange={handleChange}
                />
                <lable>Member</lable>
                <input
                  type="radio"
                  name="role"
                  id="team"
                  value="Team Member"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.form_group}>
              <Button btnText={"Register"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
