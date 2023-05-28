import './style.css';

const Section = ({title, headerButtons, body}) => {
    return (          
    <section className="section">
        <header className="section__titleBackground">
            <h2 className="section__title">{title}</h2>
            {headerButtons}
        </header>
        {body}
    </section>
    )
}

export default Section