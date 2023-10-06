import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../Redux/action/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AdminLoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCredentials({ ...credentials, [name]: value });
      setError(null);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!credentials.username || !credentials.password) {
        setError("Please complete all fields.");
        return;
      }
      setLoading(true);
  
      try {
        const response = await dispatch(adminLogin(credentials));
        if (response.success) {
          // Si la autenticación es exitosa, redirige al usuario a la página del panel de administración
          navigate("/admin/dashboard");
        } else {
          setError("Incorrect credentials. Please verify your details.");
        }
      } catch (error) {
        setError("Internal server error. Please try again later.");
        console.error("Error during authentication: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4">Administrator Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                className="form-input mt-1 block w-full pr-10"
              />
              <button
                type="button"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-4" />
              </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Log In'}
            </button>
          </form>
        </div>
      );
    };
  
  export default AdminLoginForm;
