import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleDeleteTask = (idToDelete) => {
    const updatedTasks = tasks.filter((item) => item.id !== idToDelete);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (idToToggle) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === idToToggle) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter((item) => item.completed).length;

  return (
      <div className="app">
        <div className="todo-card">
          <div className="todo-header">
            <p className="eyebrow">React Learning Project</p>
            <h1>My To-Do App</h1>
            <p className="subtitle">
              A clean React app built with reusable components.
            </p>
          </div>

          <TaskInput
              task={task}
              setTask={setTask}
              onAddTask={handleAddTask}
          />

          <div className="todo-stats">
            <span>Total: {tasks.length}</span>
            <span>Completed: {completedTasksCount}</span>
          </div>

          <TaskList
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onToggleTask={handleToggleTask}
          />
        </div>
      </div>
  );
}

export default App;
