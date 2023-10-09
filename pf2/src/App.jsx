import React, { useEffect, useState } from "react";
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
import{FormLogin} from "./Views/FormLogin/FormLogin"
import { useSelector } from 'react-redux';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInGoogle, setIsLoggedInGoogle] = useState(false);
  const userName = useSelector(state => state.userName);
 
  

  useEffect(() => {
    const user = localStorage.getItem("googleUser");
    if (user) {
      setIsLoggedInGoogle(true);
    }
  
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setIsLoggedIn(true);
    }
  }, []);
  

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("user", "loggedIn");
    localStorage.setItem("userName", userName);
    
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.setItem("userName", userName);
    
  };

  const handleLoginGoogle = (response) => {
    setIsLoggedInGoogle(true);
    localStorage.setItem("googleUser", JSON.stringify(response.profileObj));
  };
  
  const handleLogoutGoogle = () => {
    setIsLoggedInGoogle(false);
    localStorage.removeItem("googleUser");
  };

  return (
    <Router>
    <div className="App w-full">
    {isLoggedIn || isLoggedInGoogle ? ( // Modificamos la condición aquí
          <NavBarAuthenticated handleLogout={handleLogout} />
        ) : (
          <NavBarGuest />
        )}
        <Routes>
  <Route exact path="/" element={<LandingPage />}></Route>
  <Route exact path="/Detail/:idHouse" element={<Detail />}></Route>
  <Route exact path="/Home" element={<Home />}></Route>
  <Route exact path="/Detail" element={<Detail />}></Route>
  <Route path="/Form" element={<Form />}></Route>   
  <Route exact path="/Register" element={<FormUser handleLoginGoogle={handleLoginGoogle} />}></Route>   
  <Route exact path="/login" element={<FormLogin handleLogin={handleLogin}/>}></Route>   
</Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
