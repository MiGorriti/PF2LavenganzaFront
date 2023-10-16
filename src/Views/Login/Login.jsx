import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../Redux/action/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { googleRegister } from "../../Redux/action/actions";

const FormLogin = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await dispatch(getLogin(formData));
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      setIsLoading(false);
      if (loginUser && loginUser.status === 200) {
        // Guardar la información del usuario en localStorage
        localStorage.setItem("userData", JSON.stringify(formData));
        alert("Successful login.");
        handleLogin();
        if (
          formData.email === "wanderluxe@gmail.com" &&
          formData.password === "1234"
        ) {
          navigate("/admin"); // Redireccionar a la página de administrador
        } else {
          navigate("/Home"); // Redireccionar a la página por defecto
        }
        history.go(0);
      } else if (loginUser && loginUser.status === 401) {
        alert("Invalid credentials.");
      }
    } else if (loginUser.status === 403) {
      alert("Usuario bloqueado. Comuníquese con el administrador.");
      setShowAlert(false);
    }
  }, [showAlert, loginUser, handleLogin, formData, navigate, history]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clientID =
    "450156946690-8b53lo2n8n1ibojsg7b9sdg1ro2gvo1u.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, [clientID]);

  const onSuccess = (response) => {
    setUser(response.profileObj);
    console.log(response);

    const userData = {
      email: response.profileObj.email,
      givenName: response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name,
    };
    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    dispatch(googleRegister(userData));

    alert(`welcome, ${userData.name}`);

    navigate("/home");
    history.go(0);
  };

  const onFailure = () => {
    console.log("something went wrong");
  };

  return (
    <div
      className="min-h-screen py-40"
      style={{ backgroundImage: "linear-gradient(115deg, #020923, #FEE2FE)" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl shadow-lg overflow-hidden mt-4 relative">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: "url(/imagenes/Fondolanding.png)" }}
        >
          <h1 className="text-white font-Zasline text-4xl mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome to WanderLuxe Homes
          </h1>
        </div>
        <div className="w-full lg:w-1/2 py-8 px-12 text-white">
          <h2 className="text-3xl mb-4 text-center">Log In</h2>
          <p className="mb-4 text-center">Enter your credentials to log in.</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mb-6 text-black"
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-input mb-4"
              required
            />
            <div className="relative mb-6 text-black flex bg-white rounded-xl items-stretch">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-input pr-10 "
                required
              />
              <button
                type="button"
                className=" absolute right-0 transform -translate-y-1/2 text-black top-6 h-8 -bottom-1 flex items-center justify-center"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="w-4"
                />
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-blue py-3 rounded hover:bg-purple-800 focus:outline-none mb-4"
              disabled={isLoading}
            >
              Log in
            </button>
            <GoogleLogin
              clientId="YOUR_CLIENT_ID"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_policy"}
              buttonText="Login with Google"
              className="flex items-center justify-center"
            />
          </form>
          <div className="text-center">
            <p className="text-white">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")} // Cambia a un span y añade esta función
                className="text-blue font-semibold cursor-pointer"
              >
                Sign up here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
