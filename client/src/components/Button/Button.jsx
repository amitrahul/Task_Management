import styles from "./Button.module.css";
const Button = ({ btnText }) => {
  return <button className={styles.btn}>{btnText}</button>;
};

export default Button;
