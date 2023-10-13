// FormAdminLogin.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// const FormAdminLogin = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const { username, password } = formData;

//     Verificar las credenciales
//     if (username === 'wanderluxeadmin@gmail.com' && password === '1234') {
//       Redireccionar al usuario a la página de administrador
//       navigate('/admin');
//     } else {
//       alert("Invalid credentials. Please try again.");
//     }
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
//       <div className="container mx-auto flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl shadow-lg overflow-hidden mt-4 relative">
//         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(/imagenes/Fondolanding.png)' }}>
//           <h1 className="text-white font-Zasline text-4xl mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             Welcome to WanderLuxe Administrator
//           </h1>
//         </div>
//         <div className="w-full lg:w-1/2 py-8 px-12 text-white">
//           <h2 className="text-3xl mb-4 text-center">
//             Log In Admin
//           </h2>
//           <p className="mb-4 text-center">
//             Enter your credentials to log in.
//           </p>
//           <form onSubmit={handleSubmit} className="flex flex-col mb-6 text-black">
//             <input
//               type="email"
//               name="username" // Cambiado de 'email' a 'username'
//               value={formData.username} // Cambiado de 'email' a 'username'
//               onChange={(e) => handleInputChange(e)} // Cambiado de 'handleChange' a 'handleInputChange'
//               placeholder="Email"
//               className="form-input mb-4"
//               required
//             />
//             <div className="relative mb-6 text-black flex bg-white rounded-xl items-stretch">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password" // Cambiado de 'email' a 'password'
//                 value={formData.password}
//                 onChange={(e) => handleInputChange(e)}
//                 placeholder="Password"
//                 className="form-input pr-10 "
//                 required
//               />
//               <button
//                 type="button"
//                 className=" absolute left-72 transform -translate-y-1/2 text-black top-6 h-8 -bottom-1 flex items-center justify-center"
//                 onClick={togglePasswordVisibility}
//               >
//                 <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-4" />
//               </button>
//             </div>
//             <div className="flex items-center mb-6">

//             </div>
//             <button type="submit" className="w-full bg-purple-700 text-blue py-3 rounded hover:bg-purple-800 focus:outline-none mb-4">
//               Log in
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FormAdminLogin;

