import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/action/actions";
import { Link } from "react-router-dom";

export const FormUser = () => {
  const dispatch = useDispatch();

  const [postForm, setPostForm] = useState({
    email: "",
    password: "",
    fullName: "",
    lastName: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false); // Estado para rastrear si se aceptaron los términos

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const handleTermsCheckboxChange = () => {
    setTermsAccepted(!termsAccepted); // Cambiar el estado cuando se marque/desmarque la casilla de términos
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones antes de registrarte.");
      return; // No permitir el registro si los términos no se aceptan
    }

    const newUser = {
      email: postForm.email,
      password: postForm.password,
      fullName: postForm.fullName,
      lastName: postForm.lastName,
    };
    console.log(newUser);
    dispatch(createUser(newUser));

    setPostForm({
      email: "",
      password: "",
      fullName: "",
      lastName: "",
    });
    alert("Registro exitoso");
  };

  return (
    <div
      className="min-h-screen py-40"
      style={{ backgroundImage: "linear-gradient(115deg, #020923, #FEE2FE)" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url(/imagenes/Fondolanding.png)" }}
          >
            <h1 className="">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12 text-black">
            <img
              src="/imagenes/Fondolanding.png"
              alt=""
              className=" h-14 items-center"
            />
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={submitHandler} action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  value={postForm.fullName}
                  onChange={handleChange}
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  name="lastName"
                  value={postForm.lastName}
                  onChange={handleChange}
                  placeholder="LastName"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={postForm.email}
                  onChange={handleChange}
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={postForm.password}
                  onChange={handleChange}
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="checkbox"
                  className="border border-gray-400"
                  checked={termsAccepted}
                  onChange={handleTermsCheckboxChange} // Manejar el cambio en la casilla de términos
                />
                <span>
                  I accept the{" "}
                  <Link
                    to="/Terms"
                    target="_blank"
                    className="text-purple-500 font-semibold"
                  >
                    Terms of Use
                  </Link>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button
                  className={`w-full bg-purple-500 py-3 text-center text-white ${
                    !termsAccepted ? "cursor-not-allowed" : "" // Deshabilitar el botón si los términos no se aceptan
                  }`}
                  disabled={!termsAccepted} // Deshabilitar el botón si los términos no se aceptan
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
