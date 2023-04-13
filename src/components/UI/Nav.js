
import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    // const [currentPage, setCurrentPage] = useState('Home');

//     const ctx = useContext(PageContext);
    // const navClickHandler = (event) => {
    //     // console.log(event.target.textContent);
    //     // setCurrentPage(event.target.textContent)
    //     // console.log(ctx.currentPage);
    //     props.changePage(event.target.textContent);
    // }

    // console.log(currentPage);
    return (
        <ul className={classes.nav}>
            
            <Link to="/"><li>Home</li></Link>
            <Link to="/mytodolist"><li>My To Do List</li></Link>
            <Link to="/createnewtask"><li>Create New Task</li></Link>
            <Link to="/viewtaskdetail"><li>View Task Detail</li></Link>
            <Link to="/signup"><li>Sign Up</li></Link>
            {/* <li onClick={navClickHandler}>Home</li>
            <li onClick={navClickHandler}>My To Do List</li>
            <li onClick={navClickHandler}>Create New Task</li>
            <li onClick={navClickHandler}>View Task Detail</li>
            <li onClick={navClickHandler}>Sign Up</li> */}
        </ul>
    )
};

export default Nav;
