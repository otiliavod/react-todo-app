function TaskInput({ task, setTask, onAddTask }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onAddTask();
        }
    };

    return (
        <div className="task-input-wrapper">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What do you need to do?"
                className="task-input"
            />

            <button onClick={onAddTask} className="add-button">
                Add Task
            </button>
        </div>
    );
}

export default TaskInput;
