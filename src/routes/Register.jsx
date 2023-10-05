import React from 'react'
import { RegisterComponent } from '../components/RegisterComponent'
import { NavbarLoginComponent } from '../components/NavbarLoginComponent'

export const Register = () => {
    return (
        <>
            <NavbarLoginComponent></NavbarLoginComponent>
            <RegisterComponent />
        </>
    )
}
