import logo from './logo.svg';
import { Component } from 'react'
import { useState } from 'react';
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
// ==========================
// class App extends Component{
//     state = {
//         articles : [
//             { id : 1 , title : 'article 1' , body : 'This is article 1'},
//             { id : 2 , title : 'article 2' , body : 'This is article 2'},
//             { id : 3 , title : 'article 3' , body : 'This is article 3'},
//             { id : 4 , title : 'article 4' , body : 'This is article 4'},
//         ]
//     }
//
//     constructor() {
//         super();
//         setTimeout(() => {
//             this.setState({
//                 articles : [
//                     { id : 5 , title : 'article 5' , body : 'This is article 5'},
//                     { id : 6 , title : 'article 6' , body : 'This is article 6'},
//                     { id : 7 , title : 'article 7' , body : 'This is article 7'},
//                     { id : 8 , title : 'article 8' , body : 'This is article 8'},
//                 ]
//             })
//         }, 2000);
//     }
//     render() {
//         return (
//             <div className="App">
//               <Card title={this.state.articles[0].title} body={this.state.articles[0].body} />
//               <Card title={this.state.articles[1].title} body={this.state.articles[1].body} />
//               <Card title={this.state.articles[2].title} body={this.state.articles[2].body} />
//               <Card title={this.state.articles[3].title} body={this.state.articles[3].body} />
//               <Thumbnail title="x" body="y" />
//             </div>
//         );
//     }
// }
// =========================


function App() {
    const [stateArticle , setArticleState] = useState({
        articles : [
            { id : 1 , title : 'article 1' , body : 'this is article 1'},
            { id : 2 , title : 'article 2' , body : 'this is article 2'},
            { id : 3 , title : 'article 3' , body : 'this is article 3'},
            { id : 4 , title : 'article 4' , body : 'this is article 4'},
        ]
    })

    setTimeout(() => {
        setArticleState({
            articles : [
                { id : 4 , title : 'article 4' , body : 'this is article 4'},
                { id : 5 , title : 'article 5' , body : 'this is article 5'},
                { id : 6 , title : 'article 6' , body : 'this is article 6'},
                { id : 7 , title : 'article 7' , body : 'this is article 7'},
            ]
        })
    }, 2000);

    return (
        <div className="App">
            {
                stateArticle.articles.map(article => <Card key={article.id} title={article.title} body={article.body} />)
                // stateArticle.articles.map((article , index) => <Card key={index} title={article.title} body={article.body} />)
            }
            <Thumbnail title="x" body="y" />
        </div>
    );
}

export default App;
