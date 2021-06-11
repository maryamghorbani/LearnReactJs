

function Card(props) {
    return (
        <div className="card">
            <header className="card-header">
                {props.title}
            </header>
            <section className="card-content">
                <p>{props.body}</p>
                <button onClick={() => alert(props.title)}>Click</button>
            </section>
            <footer className="card-footer">
                It's a footer
            </footer>
        </div>
    )
}

export default Card;