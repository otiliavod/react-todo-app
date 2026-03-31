function FilterBar({
                       currentFilter,
                       onChangeFilter,
                       onClearCompleted,
                       hasCompletedTasks,
                   }) {
    return (
        <div className="filter-bar">
            <div className="filter-buttons">
                <button
                    className={`filter-button ${currentFilter === "all" ? "active" : ""}`}
                    onClick={() => onChangeFilter("all")}
                >
                    All
                </button>

                <button
                    className={`filter-button ${
                        currentFilter === "active" ? "active" : ""
                    }`}
                    onClick={() => onChangeFilter("active")}
                >
                    Active
                </button>

                <button
                    className={`filter-button ${
                        currentFilter === "completed" ? "active" : ""
                    }`}
                    onClick={() => onChangeFilter("completed")}
                >
                    Completed
                </button>
            </div>

            <button
                className="clear-button"
                onClick={onClearCompleted}
                disabled={!hasCompletedTasks}
            >
                Clear Completed
            </button>
        </div>
    );
}

export default FilterBar;
