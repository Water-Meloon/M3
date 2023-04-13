import classes from "./Login.module.css";
import React, { useReducer, useState } from "react";
import {auth,provider} from "../../firebase-config.js";
import {signInWithEmailAndPassword} from "firebase/auth"
import { signInWithPopup } from "firebase/auth";

const Login = (props) => {
  const userNameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.trim().length >= 4 };
    } else if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.trim().length >= 4 };
    }
    return { value: "", isValid: false};
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
    return { value: "", isValid: false};
  };

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const [errorMsg,setErrorMsg]=useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('username', user.displayName);
        props.login();
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg('An error occurred, please try again later');
      });
  };

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
      signInWithEmailAndPassword(auth, userNameState.value, passwordState.value)
        .then(() => {
          localStorage.setItem("isLoggedIn", "1");
          //console.log(localStorage.getItem("isLoggedIn"))
          localStorage.setItem("username", userNameState.value);
          // console.log(localStorage.getItem("username"));
          props.login();
          
        })
        .catch((error) => {
          console.error(error);
          if (
            error.code === "auth/wrong-password" ||
            error.code === "auth/user-not-found" ||
            error.code === "auth/invalid-email"
          ) {
            setErrorMsg("Incorrect email address or password");
          } else {
            setErrorMsg("An error occurred, please try again later");
          }
        });
    } else {
      setUsernameError(
        userNameState.value.trim().length <= 4
          ? "Username must be at least 5 characters"
          : ""
      );
      setPasswordError(
        passwordState.value.trim().length <= 6
          ? "Password must be at least 7 characters"
          : ""
      );
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
          {usernameError && <p className={classes.error}>{usernameError}</p>}
          <input
            placeholder="Password"
            type="password"
            className={classes.input}
            onChange={passwordChangeHandler}
            onBlur={validatePassword}
            value={passwordState.value}
          ></input>
          {passwordError && <p className={classes.error}>{passwordError}</p>}
        </div>

        {errorMsg && <p className={classes.error}>{errorMsg}</p>}
        <div className={classes.buttonCont}>
          <button className={classes.button} onClick={googleSignIn}>
          Sign in with Google
          </button>
  <button className={classes.button}>{props.type}</button>
  {localStorage.getItem("isLoggedIn") === "1" && (
    <div>
      <p className={classes.username}>
        Welcome, {localStorage.getItem("username")}!
      </p>
      <p>isLoggedIn value: {localStorage.getItem("isLoggedIn")}</p>
      <p>username value: {localStorage.getItem("username")}</p>
    </div>
  )}
</div>

      </form>
    </>
  );
  
};

export default Login;
