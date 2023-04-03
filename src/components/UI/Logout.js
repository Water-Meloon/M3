import classes from "./Logout.module.css";
const Logout = (props) => {

    
  return (
    <div className={classes.buttonCont}>
      <button className={classes.button} onClick={props.logout}>Logout</button>
    </div>
  );
};

export default Logout;
