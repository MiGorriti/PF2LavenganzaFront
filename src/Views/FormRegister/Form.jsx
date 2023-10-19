import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser, googleRegister } from "../../Redux/action/actions";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const FormUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({});
  const [postForm, setPostForm] = useState({
    email: "",
    password: "",
    fullName: "",
    lastName: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const clientID =
    "450156946690-8b53lo2n8n1ibojsg7b9sdg1ro2gvo1u.apps.googleusercontent.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const handleAcceptTerms = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      email: postForm.email,
      password: postForm.password,
      fullName: postForm.fullName,
      lastName: postForm.lastName,
    };

    // Verifica que todos los campos estén llenos y que se haya aceptado los términos
    if (
      newUser.email &&
      newUser.password &&
      newUser.fullName &&
      newUser.lastName &&
      acceptedTerms
    ) {
      dispatch(createUser(newUser));
      localStorage.setItem("userData", JSON.stringify(newUser));
      navigate("/Home");
      history.go(0);
      setIsAuthenticatedNav(true); // Aquí actualizamos el estado de autenticación
      setPostForm({
        email: "",
        password: "",
        fullName: "",
        lastName: "",
      });
      alert("Welcome to WanderLuxe");
    } else {
      alert("Please fill out all the fields and accept the terms.");
    }
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
    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    dispatch(googleRegister(userData));
    openSuccessModal();
    //alert(`welcome, ${userData.name}`);

    setTimeout(() => {
      navigate("/home");
      history.go(0);
    }, 3000); // Espera 2 segundos antes de ejecutar
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
    <div
      className="min-h-screen py-40"
      style={{ backgroundImage: "linear-gradient(115deg, #020923, #FEE2FE)" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl shadow-lg overflow-hidden mt-4 relative">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(/imagenes/Fondolanding.png)' }}>
          <h1 className="text-white font-Zasline text-4xl mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome to WanderLuxe Homes
          </h1>
        </div>
        <div className="w-full lg:w-1/2 py-8 px-12 text-white">
          <h1 className="text-3xl mb-4 text-center">Register</h1>
          <p className="mb-4 text-center">Create your account. It's free and only takes a minute.</p>
          <form onSubmit={submitHandler} className="flex flex-col mb-6 text-black">
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
            <div className="mt-5 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={postForm.password}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full"
              />
          <button
            type="button"
            className="absolute right-1 top-6 transform -translate-y-1/2 text-black flex items-center justify-center"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-4 " />
          </button>
            </div>
            <div className="mt-5">
              <input
                type="checkbox"
                className="border border-gray-400 mr-4"
                onChange={handleAcceptTerms}
              />
              <span>
                <Link to="/Terms" className="text-purple-500 font-semibold mr-2">
                I accept the Terms of Use & 
                </Link>
                <Link to="/Privacy" className="text-purple-500 font-semibold">
                  Privacy Policy
                </Link>
              </span>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className={`w-full bg-white py-3 text-center text-darkblue mb-5 ${
                  !acceptedTerms ? "pointer-events-none opacity-50" : ""
                }`}
                disabled={!acceptedTerms}
              >
                Register Now
              </button>
            </div>
            <GoogleLogin
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_policy"}
            />
            <div
              className={user ? "profile" : "hidden"}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <img src={user.imageUrl} alt="" />
              <h3>{user.name}</h3>
            </div>
          </form>
        </div>
        <Modal
          isOpen={isSuccessModalOpen}
          onRequestClose={closeSuccessModal}
          contentLabel="Successful Registration Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0D132D",
              borderRadius: "8px",
              width: "450px",
              margin: "auto",
              padding: "20px",
              marginTop: "55px",
              height: "100px",
              textAlign: "center",
              border: "none",
            },
          }}
        >
          <h2 style={{ fontSize: "22px", color: "#CCB7D2" }}>
            Successful Registration, {user && user.name}
          </h2>
        </Modal>
      </div>
    </div>
  );
};
