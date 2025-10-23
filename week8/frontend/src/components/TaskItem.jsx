import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={() => onToggle(task.id)} style={{ cursor: "pointer" }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
