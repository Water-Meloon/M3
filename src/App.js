import { useState } from "react";
import "./App.css";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";
import Home from "./components/Home/Home";
import MyToDoList from "./components/MyToDoList/MyToDoList";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/UI/Header";
import Nav from "./components/UI/Nav";
import ViewTaskDetail from "./components/ViewTaskDetail/ViewTaskDetail";

function App() {
  const [pageName, setPageName] = useState('Home');
//   const ctx = useContext(PageContext); 

  const pageChangeHandler = (name) => {
    setPageName(name);
  }

  // console.log(ctx.currentPage);
  // console.log(pageName);
  return (
    <>
      <Header pageName={pageName} />
      <Nav changePage={pageChangeHandler} />
      {pageName === 'Home' && <Home />}
      {pageName === 'My To Do List' && <MyToDoList />}
      {pageName === 'Create New Task' && <CreateNewTask />}
      {pageName === 'View Task Detail' && <ViewTaskDetail />}
      {pageName === 'Sign Up' && <SignUp />}
    </>
  );
}

export default App;
