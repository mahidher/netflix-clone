import "./App.css";
import Row from "./components/Row/Row";
import movieData from "./requests";
import dotenv from "dotenv";
function App() {
  return (
    <div className='App'>
      {movieData.map((data) => (
        <Row title={data.title} url={data.url}></Row>
      ))}
    </div>
  );
}

export default App;
