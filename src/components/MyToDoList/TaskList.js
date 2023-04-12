import TaskItem from "./TaskItem";
import Task from "../Classes/Task";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  const parseDate = (date) => {
    const [mm, dd, yyyy] = date.split("/");
    return new Date(+yyyy, +mm - 1, +dd);
  };

  return (
    <div className={classes.taskCont}>
      {props.data.map((element) => (
        <TaskItem
          key={Math.round(Math.random() * 1000)}
          name={element.name}
          topic={element.topic}
          categoryID={Math.round(Math.random() * 1000)}
          date={parseDate(element.dueDate)}
          status={element.status}
        />
      ))}
    </div>
  );
};

export default TaskList;
