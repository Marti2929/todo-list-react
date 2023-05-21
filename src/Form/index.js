import './style.css';

const Form = () => {
    return (
        <form className="form">
            <input className="form__input" placeholder="Wpisz nowe zadanie" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
}

export default Form