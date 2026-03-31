function TaskItem({ task, onDeleteTask, onToggleTask }) {
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <button
                className={`complete-button ${task.completed ? "done" : ""}`}
                onClick={() => onToggleTask(task.id)}
            >
                {task.completed ? "✓" : ""}
            </button>

            <span
                className="task-text"
                onClick={() => onToggleTask(task.id)}
            >
        {task.text}
      </span>

            <button
                className="delete-button"
                onClick={() => onDeleteTask(task.id)}
            >
                Delete
            </button>
        </li>
    );
}

export default TaskItem;
