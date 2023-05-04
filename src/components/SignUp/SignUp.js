import { useState } from "react";
import classes from "./SignUp.module.css";
import { auth } from "../../firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regError, setRegError] = useState("");

  const navigate = useNavigate();
  const registerHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword
      );
      if (result.user) {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("username", result.user.email); 
        localStorage.setItem("userId", result.user.uid);
        props.login(result.user.uid);
        navigate("/");
      }
    } catch (error) {
      setRegError(error.message);
    }
  };

  return (
    <>
      {props.isLoggedIn && (
        <h1 className={classes.h1}>You are already logged in!</h1>
      )}
      {!props.isLoggedIn && (
        <form className={classes.form} onSubmit={registerHandler}>
          <div className={classes.inputCont}>
            <input
              placeholder="Email"
              className={classes.input}
              type="email"
              onChange={(event) => setRegEmail(event.target.value)}
              value={regEmail}
            ></input>
            <input
              placeholder="Password"
              className={classes.input}
              type="password"
              onChange={(event) => setRegPassword(event.target.value)}
              value={regPassword}
            ></input>
          </div>
          {regError && <p className={classes.error}>{regError}</p>}
          <div className={classes.buttonCont}>
            <button className={classes.button}>Sign Up</button>
          </div>
        </form>
      )}
    </>
  );
};

export default SignUp;
