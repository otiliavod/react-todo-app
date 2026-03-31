import { useEffect, useMemo, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task.trim(),
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

  const handleEditTask = (idToEdit, newText) => {
    if (newText.trim() === "") return;

    const updatedTasks = tasks.map((item) => {
      if (item.id === idToEdit) {
        return { ...item, text: newText.trim() };
      }
      return item;
    });

    setTasks(updatedTasks);
  };

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter((item) => !item.completed);
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter((item) => item.completed).length;
  const activeTasksCount = tasks.filter((item) => !item.completed).length;

  const filteredTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((item) => !item.completed);
    }

    if (filter === "completed") {
      return tasks.filter((item) => item.completed);
    }

    return tasks;
  }, [tasks, filter]);

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
            <span>Active: {activeTasksCount}</span>
            <span>Completed: {completedTasksCount}</span>
          </div>

          <FilterBar
              currentFilter={filter}
              onChangeFilter={setFilter}
              onClearCompleted={handleClearCompleted}
              hasCompletedTasks={completedTasksCount > 0}
          />

          <TaskList
              tasks={filteredTasks}
              onDeleteTask={handleDeleteTask}
              onToggleTask={handleToggleTask}
              onEditTask={handleEditTask}
              emptyMessage={
                filter === "all"
                    ? "No tasks yet."
                    : filter === "active"
                        ? "No active tasks."
                        : "No completed tasks."
              }
              emptySubtext={
                filter === "all"
                    ? "Add your first task to get started."
                    : filter === "active"
                        ? "Everything is completed. Nice work."
                        : "Complete a task and it will appear here."
              }
          />
        </div>
      </div>
  );
}

export default App;
