import { useState } from "react";

function TaskItem({ task, onDeleteTask, onToggleTask, onEditTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleSave = () => {
        if (editedText.trim() === "") return;

        onEditTask(task.id, editedText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedText(task.text);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSave();
        }

        if (e.key === "Escape") {
            handleCancel();
        }
    };

    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <button
                className={`complete-button ${task.completed ? "done" : ""}`}
                onClick={() => onToggleTask(task.id)}
            >
                {task.completed ? "✓" : ""}
            </button>

            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="edit-input"
                    autoFocus
                />
            ) : (
                <span
                    className="task-text"
                    onClick={() => onToggleTask(task.id)}
                >
          {task.text}
        </span>
            )}

            <div className="task-actions">
                {isEditing ? (
                    <>
                        <button className="save-button" onClick={handleSave}>
                            Save
                        </button>
                        <button className="cancel-button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="edit-button"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="delete-button"
                            onClick={() => onDeleteTask(task.id)}
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </li>
    );
}

export default TaskItem;
