import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import NavBarGuest from "./Components/NavBarGuest/NavBarGuest";
//import NavBarAuthenticated from "./Components/NavBarAuthenticated/NavBarAuthenticated";
import Footer from "./Components/Footer/Footer";
import Detail from "./Views/Detail/Detail";
import LandingPage from "./Views/LandingPage/LandingPage";
import Form from "./Views/FormRent/Form";
import { FormUser } from "./Views/FormRegister/Form";
import Login from "./Views/Login/Login";


function App() {
  return (
    <Router>
      <div className="App w-full">
        <NavBarGuest/>
        <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/Detail/:idHouse" element={<Detail />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Detail" element={<Detail />}></Route>
          <Route path="/Form" element={<Form />}></Route>   
          <Route exact path="/Register" element={<FormUser/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>  

            {/* Rutas para el administrador */}
          <Route path="/admin/login" element={<AdminLoginForm />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Redirecciona cualquier otra ruta a la página de inicio */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
