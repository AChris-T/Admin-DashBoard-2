import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm'
import HomePage from "../homepage/HomePage"


const SignUp = () => {
  const [isSubmitted, setIsSubmitted] =useState(false)

  function submitForm(){
    setIsSubmitted(true)
  }
  return (
    <div className='signup'>
        {!isSubmitted ? <SignUpForm submitForm={submitForm}/> : <HomePage/> }
    </div>
  )
}

export default SignUp
