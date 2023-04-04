import Login from "../Home/Login";
import classes from "./SignUp.module.css";

const SignUp = (props) => {
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
