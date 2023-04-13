
import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    // const [currentPage, setCurrentPage] = useState('Home');

//     const ctx = useContext(PageContext);
    const navClickHandler = (event) => {
        // console.log(event.target.textContent);
        // setCurrentPage(event.target.textContent)
        // console.log(ctx.currentPage);
        props.changePage(event.target.textContent);
    }

    // console.log(currentPage);
    return (
        <ul className={classes.nav}>
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mytodolist">My To Do List</Link></li>
            <li><Link to="/createnewtask">Create New Task</Link></li>
            <li><Link to="/viewtaskdetail">View Task Detail</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            {/* <li onClick={navClickHandler}>Home</li>
            <li onClick={navClickHandler}>My To Do List</li>
            <li onClick={navClickHandler}>Create New Task</li>
            <li onClick={navClickHandler}>View Task Detail</li>
            <li onClick={navClickHandler}>Sign Up</li> */}
        </ul>
    )
};

export default Nav;
