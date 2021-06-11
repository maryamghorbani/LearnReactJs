import { Component } from 'react'

class Thumbnail extends Component{

    eventHandler (e) {
        alert(this.props.title)
    }

    render() {
        return (
            <div className="thumbnail">
                <div className="thumbnail.title">
                    {this.props.title}
                </div>
                <section className="thumbnail-body">
                    <p>{this.props.body}</p>
                    <button onClick={(e) => this.eventHandler(e)}>Click</button>
                </section>
            </div>
        )
    }
}

export default Thumbnail;