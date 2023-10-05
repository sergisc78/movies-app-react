import React, { useState } from 'react'
import email from '../assets/img/email.png'
import recoverPassword from '../assets/img/recoverPassword.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AlertComponent } from './AlertComponent'



export const RecoverPasswordComponent = () => {


  //LES DADES QUE S'ENVIARAN 
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //VENEN DE AUTHCONTEXT
  const { resetPassword } = useAuth();

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
      await login(user.email);

    } catch (error) {
      console.log(error.code);
      if (!user.email) return setError('Please, enter a valid and real email');


    }
  };


  const handleResetPassword = async () => {

    try {
      await resetPassword(user.email);
      setError('We sent you an email to reset your password');
      /*setTimeout(() => {
        navigate('/login')
      }, 10000)*/
    } catch (error) {
      setError(error.message)
    }
  }



  return (
    <>

      <div className='text-center '>
        {error && <AlertComponent message={error} />}
        <div className=' wrapper d-flex align-items-center justify-content-center w-100'>
          <div className='recover-password'>
            <div className='d-flex justify-content-center mb-2'>
              <img src={recoverPassword} alt="userLoginIcon" height={80} width={80} />
            </div>
            <h2 className='mb-3 text-center login-register'>Recover Password</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className='form-group mb-2 '>
                <img src={email} className='mb-1' alt="emailImage" height={40} width={40} />
                <input type="text" className='form-control' name='email' placeholder='Email' onChange={handleChange} />
              </div>
              <button onClick={handleResetPassword} className='btn btn-success w-100 mt-3 mb-4'>Recover Password</button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
