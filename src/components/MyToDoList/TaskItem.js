import classes from './TaskItem.module.css';

const TaskItem = (props) => {

    return (
        <div className={classes.task}>
            {props.name}
        </div>
    )
};

export default TaskItem;