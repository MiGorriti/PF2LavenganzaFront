import React, { useEffect, useState } from "react";
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
/* import { auth } from "./firebase"; */


function App() {
/*   const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {

      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []); */

  return (
    <Router>
      <div className="App w-full">
        {/* {user ? <NavbarAuthenticated /> : <NavbarGuest />} */}
        <NavBarGuest/>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Detail" element={<Detail />}></Route>
          <Route path="/Form" element={<Form />}></Route>   
          <Route exact path="/Register" element={<FormUser/>}></Route>   
            </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
