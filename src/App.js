import logo from './logo.svg';
import './App.css';
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card title="title1" body="body1" />
      <Card title="title2" body="body2" />
      <Card title="title3" body="body3" />
      <Card title="title4" body="body4" />
    </div>
  );
}

export default App;
