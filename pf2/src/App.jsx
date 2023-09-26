import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";

function App() {
  return (
    <Router>
      <div className="test">
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
