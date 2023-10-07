import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from "../../Redux/action/actions";
import { useNavigate } from 'react-router-dom';



export const FormLogin = ({ handleLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
   

    const dispatch = useDispatch();
    const loginUser = useSelector(state => state.loginUser);

    const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(getLogin(formData));
      setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
        if (loginUser && loginUser.status === 200) {
            alert('Inicio de sesión exitoso');
            handleLogin()
            navigate('/home')
        } else if (loginUser && loginUser.status === 401) {
            alert('Credenciales inválidas');
        }
        setShowAlert(false); 
    }
}, [showAlert, loginUser,handleLogin]);


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
          Log In
        </h2>
        <p className="mb-4 text-center">
        Enter your credentials to log in.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col mb-6 text-black">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form-input mb-4"
          required
        />
<div className="relative mb-6 text-black flex bg-white rounded-xl items-stretch">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    className="form-input pr-10 "
    required
  />
  <button
    type="button"
    className=" absolute left-72 transform -translate-y-1/2 text-black top-6 h-8 -bottom-1 flex items-center justify-center"
    onClick={togglePasswordVisibility}
  >
    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-4"/>
  </button>
</div>
          <div className="flex items-center mb-6">
            <input type="checkbox" className="form-checkbox border-purple-500 mr-2" />
            <span className="text-white">
              I accept the <a href="#" className="text-purple-700 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-700 font-semibold">Privacy Policy</a>
            </span>
          </div>
          <button type="submit" className="w-full bg-purple-700 text-blue py-3 rounded hover:bg-purple-800 focus:outline-none mb-4">
            Log in
          </button>
          <GoogleLogin className="w-full text-blue py-3 rounded hover:bg-purple-800 focus:outline-none mb-4"
          clientId="TU_CLIENT_ID_DE_GOOGLE"
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        </form>
        <div className="text-center">
          <p className="text-white">
            Don't have an account? <a href="#" className="text-blue font-semibold">Sign up here</a>.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FormLogin;




