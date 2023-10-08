import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/action/actions";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const FormUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    alert('welcome to WanderLuxe');
  };



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

    axios.post('http://localhost:3001/user/googleLogin', userData)
      .then((response) => {
        console.log('Usuario creado en la base de datos:', response.data);
      
        alert(`welcome, ${response.data.name}`)
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

  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #020923, #FEE2FE)' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/imagenes/Fondolanding.png)' }}>
            <h1 className="">Welcome</h1>
            <div>
              <p className="text-white">to Wonder Luxe  <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12 text-black">
            <img src="/imagenes/Fondolanding.png" alt="" className=" h-14 items-center" />
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={submitHandler} action="#">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" name="fullName" value={postForm.fullName} onChange={handleChange} placeholder="Firstname" className="border border-gray-400 py-1 px-2" />
                <input type="text" name="lastName" value={postForm.lastName} onChange={handleChange} placeholder="LastName" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" name='email' value={postForm.email} onChange={handleChange} className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" name='password' value={postForm.password} onChange={handleChange} className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
              <GoogleLogin
                clientId={clientID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_policy"}
              />
              <div className={user ? "profile" : "hidden"} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
                <img src={user.imageUrl} alt="" />
                <h3>{user.name}</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
