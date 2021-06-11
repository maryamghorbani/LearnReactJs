import { Component } from 'react'

class Thumbnail extends Component{
    render() {
        return (
            <div className="thumbnail">
                <div className="thumbnail.title">
                    {this.props.title}
                </div>
                <section className="thumbnail-body">
                    {this.props.body}
                </section>
            </div>
        )
    }
}

export default Thumbnail;