import React, { useState } from 'react'
import userLogin from '../assets/img/userLogin.png'
import email from '../assets/img/email.png'
import password from '../assets/img/password.png'
import google from '../assets/img/google.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AlertComponent } from './AlertComponent'


export const LoginComponent = () => {


    //LES DADES QUE S'ENVIARAN 
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    //VENEN DE AUTHCONTEXT
    const { login, loginGoogle } = useAuth();

    //HOOK PER NAVEGAR ENTRE PÀGINES
    const navigate = useNavigate();

    //CONTROL D'ERRORS A L'HORA DE LOGEJAR-SE
    const [error, setError] = useState();


    // CONTROLA ELS CANVIS QUE ES PRODUEIXEN ALS INPUTS
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };


    // ENVIAR LES DADES
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            setTimeout(() => {
                navigate('/movies')
            }, 3000)
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/invalid-email") {
                setError("Invalid email.Please,enter a valid and real email !");
            } else if (error.code === "auth/user-not-found") {
                setError("User not found !");
            } else if (error.code === "auth/wrong-password") {
                setError("Wrong password !");
            } else if (error.code === "auth/too-many-request") {
                setError("Too many failed attempts to login !");
            }
            else if (error.code === "auth/invalid-login-credentials") {
                setError("User not found ! Wrong Email or Password ! ");
            }
        }
    };


    //LOGIN AMB GOOGLE
    const handleLoginGoogle = async () => {
        try {
            await loginGoogle();
            navigate('/movies')
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <>
            <div className='text-center mt-3 container'>
                {error && <AlertComponent message={error}/>}
                <div className=' wrapper d-flex align-items-center justify-content-center w-100'>
                    <div className='login'>
                        <div className='d-flex justify-content-center mb-2'>
                            <img src={userLogin} alt="userLoginIcon" height={80} width={80} />
                        </div>
                        <h2 className='mb-3 text-center login-register'>Login</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-2 '>
                                <img src={email} className='mb-1' alt="emailImage" height={40} width={40} />
                                <input type="text" className='form-control' name='email' placeholder='Email' onChange={handleChange} />
                            </div>
                            <div className='form-group mb-2'>
                                <img src={password} className='mb-1' alt="emailImage" height={40} width={40} />
                                <input type="password" className='form-control mb-3' name='password' placeholder='Password' onChange={handleChange} />
                            </div>
                            <div>
                                <NavLink to={'/recover-password'} className='d-flex justify-content-center mb-2'>Forgot your password?</NavLink>

                            </div>

                            <div>
                                <NavLink to={'/register'} className='d-flex justify-content-center mb-4'>Don't you have an account?</NavLink>
                            </div>
                            <button className='btn btn-success w-100 mb-4'>Login</button>
                        </form>
                        <div className='d-flex justify-content-center '>
                            <button type="button" className="btn btn-link" onClick={handleLoginGoogle}><img className='me-3 ms-0' title='Login with Google' src={google} alt="googleImage" height={30} width={30} /></button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
