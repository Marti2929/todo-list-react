import './style.css';

const Buttons = (props) => {
    if (props.tasks.length === 0) {        
        return null;
    }        
        return (
            <div className="title__bothButtons">
                <button className={`title__button
                        ${props.tasks.every(( {done} ) => done === false ) ? "title__button--disabled" : ""}`}
                        disabled={props.tasks.every(( {done} ) => done === false )}>
                    {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className={`title__button
                        ${props.tasks.every(( {done} ) => done ) ? "title__button--disabled" : ""}`}
                        disabled={props.tasks.every(( {done} ) => done )}>
                    Ukończ wszystkie
                </button>            
            </div>
        )
}

export default Buttons