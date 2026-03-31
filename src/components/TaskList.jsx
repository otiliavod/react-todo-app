import TaskItem from "./TaskItem";

function TaskList({
                      tasks,
                      onDeleteTask,
                      onToggleTask,
                      onEditTask,
                      emptyMessage,
                      emptySubtext,
                  }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>{emptyMessage}</p>
                <span>{emptySubtext}</span>
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
                    onEditTask={onEditTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
