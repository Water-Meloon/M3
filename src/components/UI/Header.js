import classes from './Header.module.css';

const Header = (props) => {
    let name = '';
    if (props.pageName === 'Home'){
        name = 'Task Manager';
    }
    else {
        name = props.pageName;
    }
    

    // console.log(props.pageName);
    return (
        <div className={classes.header}>
            <span>{name}</span>

        </div>
    )

};

export default Header;