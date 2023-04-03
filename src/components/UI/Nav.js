
import React from 'react';
import classes from './Nav.module.css';

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
            <li onClick={navClickHandler}>Home</li>
            <li onClick={navClickHandler}>My To Do Listtt</li>
            <li onClick={navClickHandler}>Create New Task</li>
            <li onClick={navClickHandler}>View Task Detail</li>
            <li onClick={navClickHandler}>Sign Up</li>
        </ul>
    )
};

export default Nav;
