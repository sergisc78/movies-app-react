import React from 'react'
import { Home } from './routes/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './routes/Login'
import { Register } from './routes/Register'
import { Movies } from './routes/Movies'
import  {AuthProvider}  from './context/AuthContext.jsx'
import { ProtectedRouteComponent } from './components/ProtectedRouteComponent'
import { RecoverPassword } from './routes/RecoverPassword'



export const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/movies' element={<ProtectedRouteComponent><Movies></Movies></ProtectedRouteComponent>}></Route>
          <Route path='/recover-password' element={<RecoverPassword></RecoverPassword>}></Route>
          <Route path='/*' element={<Navigate to='/' />}></Route>
        </Routes>
      </AuthProvider>

    </>
  )
}
