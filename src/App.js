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

// =========================


// function App() {
//     const [stateArticle , setArticleState] = useState({
//         articles : [
//             { id : 1 , title : 'article 1' , body : 'this is article 1'},
//             { id : 2 , title : 'article 2' , body : 'this is article 2'},
//             { id : 3 , title : 'article 3' , body : 'this is article 3'},
//             { id : 4 , title : 'article 4' , body : 'this is article 4'},
//         ]
//     })
//
//
//
//     let articleList = stateArticle.articles.map(article => <Card key={article.id} title={article.title} body={article.body} />)
//     const loadMore = (e) => {
//         let article = [
//             { id : 5 , title : 'article 5' , body : 'this is article 5'},
//             { id : 6 , title : 'article 6' , body : 'this is article 6'},
//             { id : 7 , title : 'article 7' , body : 'this is article 7'},
//             { id : 8 , title : 'article 8' , body : 'this is article 8'},
//         ]
//
//         setArticleState( prevSate => {
//             return {
//                 articles: [ ...prevSate.articles , ...article]
//             }
//         })
//     }
//
//     return (
//         <div className="App">
//             {
//                 articleList
//                 // stateArticle.articles.map((article , index) => <Card key={index} title={article.title} body={article.body} />)
//             }
//             <Thumbnail title="x" body="y" />
//
//             <button onClick={loadMore}>load more</button>
//
//         </div>
//     );
// }



// ==========================
class App extends Component{
    state = {
        articles : [
            { id : 1 , title : 'article 1' , body : 'This is article 1'},
            { id : 2 , title : 'article 2' , body : 'This is article 2'},
            { id : 3 , title : 'article 3' , body : 'This is article 3'},
            { id : 4 , title : 'article 4' , body : 'This is article 4'},
        ],
        loading : false
    }



    loadMore = () => {
        this.setState({ loading : true })
        setTimeout(() => {
            let article = [
                { id : 5 , title : 'article 5' , body : 'this is article 5'},
                { id : 6 , title : 'article 6' , body : 'this is article 6'},
                { id : 7 , title : 'article 7' , body : 'this is article 7'},
                { id : 8 , title : 'article 8' , body : 'this is article 8'},
            ]

            this.setState(prevSate => {
                return {
                    articles : [ ... prevSate.articles , ... article],
                    loading : false
                }
            })
        }, 3000)
    }

    render() {
        let articleList = this.state.articles.map(article => <Card key={article.id} title={article.title} body={article.body} />)
        return (
            <div className="App">
                { articleList }
                {
                    this.state.loading
                        ? <div>Loading ...</div>
                        : null
                    // stateArticle.articles.map((article , index) => <Card key={index} title={article.title} body={article.body} />)
                }
                {/*<Thumbnail title="x" body="y" />*/}


                <button onClick={this.loadMore}>load more</button>

            </div>
        );
    }
}



export default App;
