import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>No tasks yet.</p>
                <span>Add your first task to get started.</span>
            </div>
        );
    }

    return (
        <ul className="task-list">
            {tasks.map((item) => (
                <TaskItem
                    key={item.id}
                    task={item}
                    onDeleteTask={onDeleteTask}
                    onToggleTask={onToggleTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
