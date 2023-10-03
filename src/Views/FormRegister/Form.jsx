import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/action/actions";

export const FormUser = () => {
  const dispatch = useDispatch();

  const initialFormState = {
    email: "",
    password: "",
    fullName: "",
    lastName: "",
  };

  const [postForm, setPostForm] = useState(initialFormState);

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

    dispatch(createUser(newUser));

    setPostForm(initialFormState);
  };

  const handleGoogleSignUp = () => {
    // Lógica para iniciar sesión con Google aquí
    console.log("Iniciando sesión con Google...");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
       <div className="container mx-auto flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl shadow-lg overflow-hidden mt-16 relative">
       <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(/imagenes/Fondolanding.png)' }}>
       <h1 className="text-white text-4xl mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome to WanderLuxe Homes
          </h1>
        </div>
        <div className="w-full lg:w-1/2 py-8 px-12">
          <h2 className="text-3xl mb-4 text-center text-white">Register</h2>
          <p className="mb-4 text-center text-white">
            Create your account. It's free and only takes a minute.
          </p>
          <form onSubmit={submitHandler} className="flex flex-col">
            <input type="text" name="fullName" value={postForm.fullName} onChange={handleChange} placeholder="Firstname" className="form-input mb-4" />
            <input type="text" name="lastName" value={postForm.lastName} onChange={handleChange} placeholder="Lastname" className="form-input mb-4" />
            <input type="text" placeholder="Email" name='email' value={postForm.email} onChange={handleChange} className="form-input mb-4" />
            <input type="password" placeholder="Password" name='password' value={postForm.password} onChange={handleChange} className="form-input mb-4" />
            <div className="flex items-center mb-4">
              <input type="checkbox" className="form-checkbox border-gray-400 mr-2" />
              <span className="text-white">
                I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
              </span>
            </div>
            <button className="w-full bg-purple-500 py-3 text-center text-blue rounded hover:bg-purple-700 focus:outline-none mb-4">
              Sign Up
            </button>
            <button
              onClick={handleGoogleSignUp}
              className="w-full bg-red-500 py-3 text-center text-blue rounded hover:bg-red-700 focus:outline-none"
            >
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



