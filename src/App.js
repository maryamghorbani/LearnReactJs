import { PureComponent } from 'react';
import './App.css';
import Card from "./components/Card";
import { Carousel } from 'react-bootstrap';
import ErrorBoundary from "./components/errors/ErrorBoundary";


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
class App extends PureComponent {


    state = {
        articles : [
            { id : 1 , title : 'article 1' , body : 'This is article 1' , active : 1 },
            { id : 2 , title : 'article 2' , body : 'This is article 2' , active : 1 },
            { id : 3 , title : 'article 3' , body : 'This is article 3' , active : 0 },
            { id : 4 , title : 'article 4' , body : 'This is article 4' , active : 1 },
        ],
        loading : false
    }



    loadMore = () => {
        this.setState({ loading : true })
        setTimeout(() => {
            let article = [
                { id : 5 , title : 'article 5' , body : 'this is article 5' , active : 1 },
                { id : 6 , title : 'article 6' , body : 'this is article 6' , active : 0 },
                { id : 7 , title : 'article 7' , body : 'this is article 7' , active : 0 },
                { id : 8 , title : 'article 8' , body : 'this is article 8' , active : 1 },
            ]

            this.setState(prevSate => {
                return {
                    articles : [ ...prevSate.articles , ...article],
                    loading : false
                }
            })
        }, 3000)
    }

    render() {
        let articleList = this.state.articles.map(article => article.active ? <ErrorBoundary><Card key={article.id} title={article.title} body={article.body} /></ErrorBoundary> : null)
        let btnStyles = {
            backgroundColor : '#56b4fc',
            color : 'white',
            borderRadius : '4px',
            border : 'none',
            padding : '8px 12px'
        }
        return (

            <div className="App">


                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-1200x600.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://training.technoloader.com/blog/wp-content/uploads/2019/05/React-Developer.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.greenstechnologys.com/images/reactjs.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>




                { articleList }
                <button style={btnStyles} onClick={this.loadMore}>load more</button>
                {
                    this.state.loading
                        ? <div>Loading ...</div>
                        : null
                    // stateArticle.articles.map((article , index) => <Card key={index} title={article.title} body={article.body} />)
                }
                {/*<Thumbnail title="x" body="y" />*/}




            </div>
        );
    }
}



export default App;
