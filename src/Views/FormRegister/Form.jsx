import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/action/actions";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const FormUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({})
  const [postForm, setPostForm] = useState({
    email: '',
    password: '',
    fullName: '',
    lastName: '',
  });


  const clientID = "450156946690-8b53lo2n8n1ibojsg7b9sdg1ro2gvo1u.apps.googleusercontent.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      email: postForm.email,
      password: postForm.password,
      fullName: postForm.fullName,
      lastName: postForm.lastName,
    };
    console.log(newUser);
    dispatch(createUser(newUser));

    setPostForm({
      email: '',
      password: '',
      fullName: '',
      lastName: '',
    });
    alert('testing');
  };

  const onSuccess = (response) => {
    setUser(response.profileObj);
    console.log(response);

    // Utilizamos los datos del perfil para crear el usuario
    const userData = {
      email: response.profileObj.email,
      givenName: response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name,
    };

    axios.post('http://localhost:3001/user/googleLogin', userData)
    .then((response) => {
      console.log('Usuario creado en la base de datos:', response.data);
      // Redirige al usuario a la página de inicio después de la autenticación
      navigate("/home");
    })
    .catch((error) => {
      console.error('Error al crear el usuario:', error);
    });
};

const onFailure = () => {
  console.log("something went wrong");
};

useEffect(() => {
  const start = () => {
    gapi.auth2.init({
      clientId: clientID,
    });
  };
  gapi.load("client:auth2", start);
}, [clientID]);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl shadow-lg overflow-hidden mt-4 relative">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(/imagenes/Fondolanding.png)' }}>
          <h1 className="text-white font-Zasline text-4xl mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome to WanderLuxe Homes
          </h1>
        </div>
        <div className="w-full lg:w-1/2 py-8 px-12 text-white">
          <h2 className="text-3xl mb-4 text-center">
            Register
          </h2>
          <p className="mb-4 text-center">
            Create your account. It's free and only takes a minute.
          </p>
          <form onSubmit={submitHandler} className="flex flex-col mb-6 text-black">
            <input
              type="text"
              name="fullName"
              value={postForm.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="form-input mb-4"
              required
            />
            <input
              type="text"
              name="lastName"
              value={postForm.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="form-input mb-4"
              required
            />
            <input
              type="email"
              name="email"
              value={postForm.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-input mb-4"
              required
            />
            <div className="relative mb-6 text-black flex bg-white rounded-xl items-stretch">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={postForm.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-input pr-10 "
                required
              />
              <button
                type="button"
                className="absolute left-72 transform -translate-y-1/2 text-black top-6 h-8 -bottom-1 flex items-center justify-center"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-4"/>
              </button>
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" className="form-checkbox border-purple-500 mr-2" required />
              <span className="text-white">
                I accept the <a href="#" className="text-purple-700 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-700 font-semibold">Privacy Policy</a>
              </span>
            </div>
            <button type="submit" className="w-full bg-purple-700 text-blue py-3 rounded hover:bg-purple-800 focus:outline-none mb-4">
              Sign Up
            </button>
            <GoogleLogin
                clientId={clientID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_policy"}
              />
          </form>
          <div className="text-center">
            <p className="text-white">
              Already have an account? <a href="#" className="text-blue font-semibold">Log in here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUser;




