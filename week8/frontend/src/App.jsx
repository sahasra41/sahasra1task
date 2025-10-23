import React, { useState, useEffect } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleAddTask = async (title) => {
    const newTask = { title, completed: false };
    const response = await addTask(newTask);
    setTasks((prev) => [...prev, response.data]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updatedTask = { ...task, completed: !task.completed };
    await updateTask(id, updatedTask);
    setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <p>No tasks yet! Add your first one below</p>
      ) : (
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={toggleTaskCompletion} />
      )}
    </div>
  );
}

export default App;
