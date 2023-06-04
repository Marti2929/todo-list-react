import './style.css';
import React, {useState} from 'react';

const Form = ({addNewTask}) => {
    const [newTask, setNewTask] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setNewTask("");

        if (newTask.trim() !== "") {
            addNewTask(newTask.trim());
        }
    } 
    
    return (
        <form onSubmit={onFormSubmit}
              className="form">
            <input
                value={newTask}
                onChange={({target}) => setNewTask(target.value)}
                className="form__input"
                placeholder="Wpisz nowe zadanie" />
            <button
                className="form__button">
                Dodaj zadanie
            </button>
        </form>
    )
}

export default Form