import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm'
import HomePage from "../homepage/HomePage"
import {NavLink} from "react-router-dom"



const SignUp = () => {
  const [isSubmitted, setIsSubmitted] =useState(false)

  function submitForm(){
    setIsSubmitted(true)
  }
  return (
    <div className='signup'>
        {!isSubmitted ? <SignUpForm submitForm={submitForm}/> : <NavLink to="./tables"/> }
    </div>
  )
}

export default SignUp
