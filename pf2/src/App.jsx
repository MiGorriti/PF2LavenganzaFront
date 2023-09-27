import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Navbar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import Detail from "./Views/Detail/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Detail" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
