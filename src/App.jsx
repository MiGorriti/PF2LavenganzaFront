import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import NavBarGuest from "./Components/NavBarGuest/NavBarGuest";
import NavBarAuthenticated from "./Components/NavBarAuthenticated/NavBarAuthenticated";
import Footer from "./Components/Footer/Footer";
import Detail from "./Views/Detail/Detail";
import LandingPage from "./Views/LandingPage/LandingPage";
import Form from "./Views/FormRent/Form";
import { FormUser } from "./Views/FormRegister/Form";
import { FormLogin } from "./Views/Login/Login";
//import FormAdmin  from "./Views/FormAdmin/FormAdmin";
//import AdminDashboard from "./Views/DashBoard/AdminDashboard";
import TerminosYCondiciones from "./Views/Terms/Terms";
import Privacidad from "./Views/Terms/Privacy";
import Reservations from "./Views/Reservations/Reservations";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(null);
  };

  return (
    <Router>
      <div className="App w-full">
        {isLoggedIn ? (
          <NavBarAuthenticated />
        ) : (
          <NavBarGuest handleLogin={handleLogin} handleLogout={handleLogout} />
        )}
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/Detail/:idHouse" element={<Detail />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route exact path="/Register" element={<FormUser />}></Route>
          <Route exact path="/Login" element={<FormLogin handleLogin={handleLogin}/>}></Route>
          <Route exact path="/Terms" element={<TerminosYCondiciones />}></Route>
          <Route exact path="/Privacy" element={<Privacidad />}></Route>
          <Route exact path="/MyReservations" element={<Reservations/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
