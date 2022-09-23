import React, { useState } from 'react'
import SignInForm from '../../components/SignInForm'
import SignUp from "../SignUp/SignUp"
import "./signin.scss"


const SignIn = () => {
  const [isSubmitted, setIsSubmitted] =useState(false)
  function submitForm(){
    setIsSubmitted(true)
  }
  return (
    <div className="SignIn">
       {!isSubmitted ? <SignInForm submitForm={submitForm}/>:<SignUp/>}
    </div>
    )
}
        
export default SignIn