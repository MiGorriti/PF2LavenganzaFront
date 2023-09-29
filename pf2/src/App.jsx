import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Navbar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import Detail from "./Views/Detail/Detail";
import LandingPage from "./Views/LandingPage/LandingPage";
import Form from './Views/FormRent/Form'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Detail" element={<Detail />}></Route>
          <Route exact path='/Form' element={<Form/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
