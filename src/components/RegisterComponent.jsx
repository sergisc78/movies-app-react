import React, { useState } from 'react'
import register from '../assets/img/register.png'
import email from '../assets/img/email.png'
import password from '../assets/img/password.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AlertComponent } from './AlertComponent'




export const RegisterComponent = () => {


    // USE STATE PER USER
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // USE STATE PER CONTROL D'ERRORS
    const [error, setError] = useState()

    const { singup } = useAuth();

    //HOOK PER NAVEGAR ENTRE PÀGINES
    const navigate = useNavigate();


    // CAPTURA EL QUE S'ESCRIU ALS INPUTS I ACTUALITZA L'ESTAT
    const handleChange = ({ target: { name, value } }) => {
        //... user actualitza l'estat
        setUser({ ...user, [name]: value });
    }


    //PER CONTROLAR LES DADES QUE S'ENVIEN
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await singup(user.email, user.password);
            setTimeout(() => {
                navigate('/movies')
            }, 3000)
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                setError("Please,enter a valid and real email !");
            } else if (error.code === "auth/weak-password") {
                setError("Password too weak, at least 6 characters");
            } else if (error.code === "auth/email-already-in-use") {
                setError("User exists !!");
            }
        }

    }

    return (
        <>
            <div className='text-center '>
            {error && <AlertComponent message={error}/>}
                <div className=' wrapper d-flex align-items-center justify-content-center w-100'>
                    <div className='register-user'>
                        <div className='d-flex justify-content-center mb-2'>
                            <img src={register} alt="userLoginIcon" height={80} width={80} />
                        </div>
                        <h2 className='mb-3 text-center login-register'>Register</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-2 '>
                                <img src={email} className='email' height={40} width={40} />
                                <input type="text" className='form-control' name='email' placeholder='Email' onChange={handleChange} />
                            </div>
                            <div className='form-group mb-2'>
                                <img src={password} className='user' height={40} width={40} />
                                <input type="password" className='form-control mb-3' name='password' placeholder='Password' onChange={handleChange} />
                            </div>
                            <div>
                                <NavLink to={'/login'} className='d-flex justify-content-center mb-4' href="http://">You have already an account</NavLink>
                            </div>
                            <button type="submit" className='btn btn-success w-100 mb-4'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
