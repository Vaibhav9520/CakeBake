import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Reviews/>
      <Contact/>
    </div>
  );
}

export default App;
