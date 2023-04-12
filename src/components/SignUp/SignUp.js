import Login from "../Home/Login";
import {useState} from "react";
import classes from "./SignUp.module.css";
import auth from "../../firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = (props) => {
  const [regEmail,setEmail]=useState("");
  const reg = async() => {};
  const loginHandler = () => {
    props.login();
    props.changePage("Home");
    
  };
  
  return (
    <>
      {props.isLoggedIn && (
        <h1 className={classes.h1}>You are already logged in!</h1>
      )}
      {!props.isLoggedIn && (
        <Login
          isLoggedIn={props.isLoggedIn}
          login={loginHandler}
          type={"Sign Up"}
        />
      )}
    </>
  );
};

export default SignUp;
