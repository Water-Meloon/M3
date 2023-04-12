import { useEffect, useState } from "react";
import classes from "./App.module.css";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";
import Home from "./components/Home/Home";
import MyToDoList from "./components/MyToDoList/MyToDoList";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/UI/Header";
import Nav from "./components/UI/Nav";
import ViewTaskDetail from "./components/ViewTaskDetail/ViewTaskDetail";
import Card from "./components/UI/Card";
import Logout from "./components/UI/Logout";
import Footer from "./components/UI/Footer";


function App() {
  


  const [pageName, setPageName] = useState("Home");
  //   const ctx = useContext(PageContext);

  const [data, setData] = useState();

  useEffect(() => {
    fetch("./tasks.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const pageChangeHandler = (name) => {
    setPageName(name);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");

    if (loginInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // console.log(ctx.currentPage);
  // console.log(pageName);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const deleteTask = (id) => {
    setData(data.filter((task) => task.id !== id));
  };

  const addTaskHandler=(formData)=>{
    setData(prevData=>{
      return [formData,...prevData];
    })
  }

  console.log(localStorage.getItem("isLoggedIn"));
  return (
    <div className={classes.wrapper}>
      <Header pageName={pageName} />
      <Nav changePage={pageChangeHandler} />
      <Card>
        {pageName === "Home" && (
          <Home isLoggedIn={isLoggedIn} login={loginHandler} />
        )}
        {pageName === "My To Do List" && data&&<MyToDoList tasks = {data} deleteHandler={deleteTask}/>}
        {pageName === "Create New Task" && <CreateNewTask addTask={addTaskHandler}/>}
        {pageName === "View Task Detail" && <ViewTaskDetail />}
        {pageName === "Sign Up" && <SignUp isLoggedIn={isLoggedIn} login={loginHandler} changePage={pageChangeHandler}/>}
        {isLoggedIn && <div>{localStorage.getItem("username")}</div>}
        {isLoggedIn && <Logout logout={logoutHandler} />}
      </Card>
      <Footer />
    </div>
  );
}

export default App;
