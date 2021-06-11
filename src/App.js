import logo from './logo.svg';
import { Component } from 'react'
import './App.css';
import Card from "./Card";
import Thumbnail from "./Thumbnail";

// function App() {
//   return (
//     <div className="App">
//       <Card title="title1" body="body1" />
//       <Card title="title2" body="body2" />
//       <Card title="title3" body="body3" />
//       <Card title="title4" body="body4" />
//       <Thumbnail title="x" body="y" />
//     </div>
//   );
// }

class App extends Component{
    state = {
        articles : [
            { id : 1 , title : 'article 1' , body : 'This is article 1'},
            { id : 2 , title : 'article 2' , body : 'This is article 2'},
            { id : 3 , title : 'article 3' , body : 'This is article 3'},
            { id : 4 , title : 'article 4' , body : 'This is article 4'},
        ]
    }
    render() {
        return (
            <div className="App">
              <Card title={this.state.articles[0].title} body={this.state.articles[0].body} />
              <Card title={this.state.articles[1].title} body={this.state.articles[1].body} />
              <Card title={this.state.articles[2].title} body={this.state.articles[2].body} />
              <Card title={this.state.articles[3].title} body={this.state.articles[3].body} />
              <Thumbnail title="x" body="y" />
            </div>
        );
    }
}

export default App;
