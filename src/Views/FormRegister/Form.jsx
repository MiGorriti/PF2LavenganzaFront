import React, { useState } from "react";
import axios from "axios"; // Importa la biblioteca axios
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/action/actions"; // No necesitas importar loginUser aquí
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Authenticator/AuthPro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const FormUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();
  const [postForm, setPostForm] = useState({
    email: "",
    password: "",
    fullName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/register", postForm); // Realiza la solicitud POST al backend para el registro
      dispatch(createUser(response.data)); // Asume que el backend devuelve el usuario creado y lo almacena en el estado global
      navigate("/home"); // Redirige al usuario a la página de inicio después del registro exitoso
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const responseGoogle = async (response) => {
    try {
      const { tokenId } = response;
      const googleResponse = await axios.post("http://localhost:3001/user/google-login", { tokenId }); // Realiza la solicitud POST al backend para el inicio de sesión con Google
      dispatch(createUser(googleResponse.data)); // Asumo que el backend devuelve el usuario autenticado y lo almacena en el estado global
      navigate("/home"); // Redirige al usuario a la página de inicio después del inicio de sesión exitoso con Google
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (auth.isAuthenticated) {
    navigate("/home");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl shadow-lg overflow-hidden mt-4 relative">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(/imagenes/Fondolanding.png)' }}>
          <h1 className="text-white font-Zasline text-4xl mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome to WanderLuxe Homes
          </h1>
        </div>
        <div className="w-full lg:w-1/2 py-8 px-12 text-white">
          <h2 className="text-3xl mb-4 text-center">Register</h2>
          <p className="mb-4 text-center">
            Create your account. It's free and only takes a minute.
          </p>
          <form onSubmit={submitHandler} className="flex flex-col text-black">
            <input type="text" name="fullName" value={postForm.fullName} onChange={handleChange} placeholder="Firstname" className="form-input mb-4" />
            <input type="text" name="lastName" value={postForm.lastName} onChange={handleChange} placeholder="Lastname" className="form-input mb-4" />
            <input type="text" placeholder="Email" name='email' value={postForm.email} onChange={handleChange} className="form-input mb-4" />
            <div className="relative mb-6 text-black flex bg-white rounded-xl items-stretch">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={postForm.password}
            onChange={handleChange}
            placeholder="Password"
            className="form-input pr-10"
            required
          />
          <button
            type="button"
            className="absolute left-72 transform -translate-y-1/2 text-black top-6 h-8 -bottom-1 flex items-center justify-center"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-4" />
          </button>
        </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="form-checkbox border-gray-400 mr-2" />
              <span className="text-white">
                I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
              </span>
            </div>
            <button className="w-full bg-purple-500 py-3 text-center text-blue rounded hover:bg-purple-700 focus:outline-none mb-4">
              Sign Up
            </button>
            <GoogleLogin
              className="w-full bg-red-500 py-3 text-center text-blue rounded hover:bg-red-700 focus:outline-none"
              clientId="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"
              buttonText="Sign Up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </form>
          <div className="text-center">
            <p className="text-white mt-6">
              Have an account? <a href="#" className="text-blue font-semibold">Log in here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



