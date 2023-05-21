import './style.css';

const Section = ({title, headerButtons, body}) => {
    return (          
    <section>
        <header className="title__background title__backgroundList">
            <h2 className="title">{title}</h2>
            {headerButtons}
        </header>
        {body}
    </section>
    )
}

export default Section