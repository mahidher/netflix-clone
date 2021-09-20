import "./App.css";
import Homepage from "./components/Home/Home.page";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
