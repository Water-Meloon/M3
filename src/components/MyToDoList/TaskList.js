import TaskItem from "./TaskItem";
import Task from "../Classes/Task";
import classes from './TaskList.module.css';

const TaskList = (props) => {
  const parseDate = (date) => {
    const [mm, dd, yyyy] = date.split("/");
    return new Date(+yyyy, +mm - 1, +dd);
  };

  const tasks = props.data.map((task) => {
    return new Task(
      task.key,
      task.name,
      task.topic,
      Math.round(Math.random() * 1000),
      parseDate(task.dueDate),
      task.taskStatus
    );
  });

  console.log(tasks);
  return (
    <div className={classes.taskCont}>
      {tasks.map((element) => (
        <TaskItem task={element} key={Math.round(Math.random()*1000)}/>
      ))}
    </div>
  );
};

export default TaskList;
