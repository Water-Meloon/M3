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

  return (
    <div className={classes.wrapper}>
      <Header pageName={pageName} />
      <Nav changePage={pageChangeHandler} />
      <Card>
        {pageName === "Home" && (
          <Home isLoggedIn={isLoggedIn} login={loginHandler} />
        )}
        {pageName === "My To Do List" && <MyToDoList />}
        {pageName === "Create New Task" && <CreateNewTask />}
        {pageName === "View Task Detail" && <ViewTaskDetail />}
        {pageName === "Sign Up" && <SignUp isLoggedIn={isLoggedIn} login={loginHandler} changePage={pageChangeHandler}/>}
        {isLoggedIn && <Logout logout={logoutHandler} />}
      </Card>
      <Footer />
    </div>
  );
}

export default App;
