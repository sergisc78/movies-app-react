import React from 'react'
import { LoginComponent } from '../components/LoginComponent'
import { NavbarLoginComponent } from '../components/NavbarLoginComponent'


export const Login = () => {
  return (
    <>
      <NavbarLoginComponent></NavbarLoginComponent>
      <LoginComponent></LoginComponent>
    </>
  )
}
