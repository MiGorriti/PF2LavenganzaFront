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
            setShowAlert(false); // Oculta la alerta después de mostrarla
        }
    }, [showAlert, loginUser,handleLogin]);



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
