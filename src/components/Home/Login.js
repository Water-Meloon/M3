import classes from "./Login.module.css";
import React, { useReducer, useState } from "react";
import { auth, provider } from "../../firebase-config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false);

  const googleSignIn = () => {
    setIsGoogleSignInLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("username", user.displayName);
        localStorage.setItem("userId", user.uid);
        setShowError(false);
        props.login(user.uid);
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          setShowError(true);
          setErrorMsg("Sign-in popup was closed. Please try again.");
        } else {
          setShowError(true);
          console.error(error);
          setErrorMsg("An error occurred, please try again later");
        }
      })
      .finally(() => {
        setIsGoogleSignInLoading(false);
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
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("isLoggedIn", "1");
          localStorage.setItem("username", user.email);
          localStorage.setItem("userId", user.uid);
          setShowError(false);
          props.login(user.uid);
        })
        .catch((error) => {
          setShowError(true);
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
      setShowError(true);
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

        {showError && <p className={classes.error}>{errorMsg}</p>}
        <div className={classes.buttonCont}>
          <div>
            {/* {tried to add google img} */}
            {/* <span className={classes.googleImg}></span> */}
            <button
              className={classes.googleButton}
              onClick={googleSignIn}
              disabled={isGoogleSignInLoading}
            >
              Sign in with Google
            </button>
          </div>

          <button className={classes.button}>{props.type}</button>
        </div>
      </form>
    </>
  );
};

export default Login;
