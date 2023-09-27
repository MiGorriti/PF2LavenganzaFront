import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Navbar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" exact component={Home} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
