import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
// import Home from "./components/Home";
import NavBarComp from "./components/NavBarComp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Footer />
    </div>
  );
}

export default App;
