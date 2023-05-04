import classes from "./Home.module.css";
import Login from "./Login";
const Home = (props) => {
    const loginHandler = (userId) => {
        props.login(userId);
    }
  return (
    <>
      {!props.isLoggedIn && <Login isLoggedIn={props.isLoggedIn} login={loginHandler} type={'Login'}/>}
      <div className={classes.cont}>
        <h1 className={classes.h1}>About Us</h1>
        <p className={classes.p}>
          &nbsp;&nbsp;This website was made to offer a streamlined way to manage
          your tasks and objectives. You can create and classify tasks, set
          notifactions and due dates, and monitor your progress.
        </p>
      </div>
    </>
  );
};

export default Home;
