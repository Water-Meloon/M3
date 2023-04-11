import classes from "./Login.module.css";
import React, { useReducer, useState } from "react";
const Login = (props) => {
  const userNameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.trim().length >= 4 };
    } else if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.trim().length >= 4 };
    }
    return { value: "", isValid: false };
  };

  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: "",
    isValid: null,
  });

  const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.trim().length >= 6 };
    } else if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.trim().length >= 6 };
    }
    return { value: "", isValid: false };
  };

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const usernameChangeHandler = (event) => {
    dispatchUserName({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      passwordState.isValid && event.target.value.trim().length >= 4
    );
  };

  const validateUsername = () => {
    dispatchUserName({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      userNameState.isValid && event.target.value.trim().length >= 6
    );
  };
  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      localStorage.setItem("isLoggedIn", "1");
      setShowError(false);
      props.login();
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.inputCont}>
          <input
            placeholder="Username"
            className={classes.input}
            onChange={usernameChangeHandler}
            onBlur={validateUsername}
            value={userNameState.value}
          ></input>
          <input
            placeholder="Password"
            className={classes.input}
            onChange={passwordChangeHandler}
            onBlur={validatePassword}
            value={passwordState.value}
          ></input>
        </div>
        {showError && (
          <p className={classes.p}>
            Invalid Input. Username must be at least characters 4 and Password
            must be at least 6 characters
          </p>
        )}
        <div className={classes.buttonCont}>
          <button className={classes.button}>{props.type}</button>
        </div>
      </form>
    </>
  );
};

export default Login;
