

function Card(props) {
    return (
        <div className="card">
            <header className="card-header">
                {props.title}
            </header>
            <section className="card-content">
                {props.body}
            </section>
            <footer className="card-footer">
                It's a footer
            </footer>
        </div>
    )
}

export default Card;