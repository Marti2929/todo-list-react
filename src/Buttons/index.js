import './style.css';

const Buttons = ({tasks, hideDoneTasks, toggleHideDoneTasks}) => {
    if (tasks.length === 0) {        
        return null;
    }        
        return (
            <div className="buttons">
                <button onClick={toggleHideDoneTasks}
                        className={`buttons__button
                        ${tasks.every(( {done} ) => done === false ) ? "buttons__button--disabled" : ""}`}
                        disabled={tasks.every(( {done} ) => done === false )}>
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className={`buttons__button
                        ${tasks.every(( {done} ) => done ) ? "buttons__button--disabled" : ""}`}
                        disabled={tasks.every(( {done} ) => done )}>
                    Ukończ wszystkie
                </button>            
            </div>
        )
}

export default Buttons