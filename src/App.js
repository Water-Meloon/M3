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
//import Login from "./components/Home/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import axios from "axios";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === 'production') disableReactDevTools();

function App() {
  const [pageName, setPageName] = useState("Home");
  const [userId, setUserId] = useState(localStorage.getItem("userId") ||"");

  const [data, setData] = useState([]);

  const pageChangeHandler = (name) => {
    setPageName(name);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");
    const storedUserId = localStorage.getItem("userId");
    if (loginInfo === "1") {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      if (userId) {
        const response = await axios.get(`http://localhost:3001/api/Tasks/user/${userId}`);
        setData(response.data);
      }
    };
    fetchTasks();
  }, [userId]);

  // console.log(ctx.currentPage);
  // console.log(pageName);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setUserId(null);
    setData([]);
  };


  const loginHandler = (userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
    console.log('Updated userId:', userId);
  };

  const deleteTask = (id) => {
    setData(data.filter((task) => task._id!== id));
  };

  const addTaskHandler = (formData) => {
    setData((prevData) => {
      return [formData, ...prevData];
    });
  };

  const [selectedTask, setSelectedTask] = useState(null);
const selectTaskHandler = (taskId) => {
  if (isLoggedIn) {
    const task = data.find((task) => task._id === taskId);
    setSelectedTask(task);
  } else {
    setSelectedTask(null);
  }
};

  console.log(localStorage.getItem("isLoggedIn"));
  return (
    <Router>
      <div className={classes.wrapper}>
        <Header pageName={pageName} />
        <Nav changePage={pageChangeHandler} />
        <Card>
          <Routes>
            <Route
              path="/"
              exact
              element={<Home isLoggedIn={isLoggedIn} login={loginHandler} />}
            />
            {/* <Route
              path="/login"
              element={
                <Login
                  isLoggedIn={isLoggedIn}
                  login={loginHandler}
                  changePage={pageChangeHandler}
                  userId={userId}
            />}
            /> */}
            <Route
              path="/mytodolist"
              element={
                data ? (
                  <MyToDoList tasks={data} deleteHandler={deleteTask} onSelectTask={selectTaskHandler} />
                ) : (
                  <p>Loading tasks...</p>
                )
              }
            />
            <Route
              path="/createnewtask"
              element={<CreateNewTask userId={userId} addTask={addTaskHandler}/>}
            />
            <Route path="/viewtaskdetail" element={<ViewTaskDetail task={selectedTask} isLoggedIn={isLoggedIn}/>} />
            <Route
              path="/signup"
              element={
                <SignUp
                  isLoggedIn={isLoggedIn}
                  login={loginHandler}
                  changePage={pageChangeHandler}
                />
              }
            />
          </Routes>
          {isLoggedIn && <div className={classes.username}>{localStorage.getItem("username")}</div>}
          {isLoggedIn && <Logout logout={logoutHandler} />}
          
        </Card>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
