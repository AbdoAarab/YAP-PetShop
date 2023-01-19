import React from "react";
import styles from "./form.module.css";
const LoginForm = ({
  handleLoginIn,
  handleChangeUserName,
  handleChangePassword,
  username,
  password,
}) => {
  return (
    <div className={styles.container__modal__product}>
      <h1 className={styles.title__modal__product}> Welcome back! </h1>
      <form className={styles.form__group__product}>
        <div className={styles.form__input__product}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChangeUserName}
            placeholder="Enter Your Username..."
          />
        </div>
        <div className={styles.form__input__product}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Enter Your Password..."
          />
        </div>

        <div className={styles.form__input__product}>
          <button
            className={styles.btn__create__product}
            type="button"
            onClick={() => handleLoginIn(username,password)}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
