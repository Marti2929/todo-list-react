import "./style.css";

const List = ({ tasks, hideDoneTasks, toggleTaskDone }) => {
    return (
        <ul className="list">
            {tasks.map(task => (
                <li onClick={() => toggleTaskDone(task.id)}
                    key={task.id}
                    className={`list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}
                >
                    <button className="list__button list__button--done">
                        {task.done ? "✔" : ""}
                    </button>
                    <div className={`list__content ${task.done ? "list__content--done" : ""}`}>
                        {task.content} - {task.id}
                    </div>
                    <button className="list__button list__button--remove">
                        🗑
                    </button>
                </li>
            ))}
        </ul>
    )
};

export default List;