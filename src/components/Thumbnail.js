import { Component } from 'react';
import './Thumbnail.css'

class Thumbnail extends Component{

    eventHandler (e) {
        alert('clicked')
    }

    render() {
        return (
            <div className="thumbnail">
                <div className="thumbnail.title">
                    {this.props.title}
                </div>
                <section className="thumbnail-body">
                    <p>{this.props.body}</p>
                    <button onClick={this.eventHandler}>Click</button>
                </section>
            </div>
        )
    }
}

export default Thumbnail;