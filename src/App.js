import { useContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import MyToDoList from "./components/MyToDoList/MyToDoList";
import PageContext from "./components/store/page-context";
import Header from "./components/UI/Header";
import Nav from "./components/UI/Nav";

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
    </>
  );
}

export default App;
