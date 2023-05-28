import "./style.css";

const List = ({ tasks, hideDoneTasks }) => {
    return (
        <ul className="list">
            {tasks.map(task => (
                <li key={task.id}
                    className={`list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}
                >
                    <button className="list__button list__button--done">
                        {task.done ? "✔" : ""}
                    </button>
                    <div className={`list__content ${task.done ? "list__content--done" : ""}`}>
                        {task.content}
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