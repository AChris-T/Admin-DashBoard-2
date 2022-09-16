import React from 'react'
import Useform from "./UseFormUp"
import validate from "./ValidationSignUp"
import "./signupform.scss"
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const SignUpForm = ({submitForm}) => {
    const{handleChange, values, handleSubmit, errors} =Useform(submitForm,validate)
    

  return (
    <div className='signupform'>
    <Paper elevation={3} className="signupPaper">
        <Paper className="signcontainer">
            <h2>Sign In</h2>
            <div className="iconsign">
                <FacebookIcon className="icon"/>
                <GitHubIcon className="icon"/>
                <WhatsAppIcon className="icon"/>
            </div>
        </Paper>
    <form className="form" onSubmit={handleSubmit}>
    <div className="formInputs">
      <label htmlFor="" className='formLabel'>Username</label>
      <input type="text"
        id='username'
        name="username" 
        className='forminput'
        placeholder='Enter your Username'  
        value={values.username}
        onChange={handleChange}
      />
      {errors.username && <p>{errors.username}</p>}
    </div>
    <div className="formInputs">
      <label htmlFor="email" className='formLabel'>Email</label>
      <input type="email"
        id='email'
        name="email" 
        className='forminput'
        placeholder='Enter your email'
        value={values.email}
        onChange={handleChange}  
      />
      {errors.email && <p>{errors.email}</p>}
    </div>
    <div className="formInputs">
      <label htmlFor="password" className='formLabel'>Password</label>
      <input type="password"
        id='password'
        name="password" 
        className='forminput' 
        placeholder='Enter your Password' 
        value={values.password}
        onChange={handleChange} 
      />
      {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="formInputs">
      <label htmlFor="password2" className='formLabel'>Confirm Password</label>
      <input type="password"
        id='password2'
        name="password2" 
        className='forminput'
        placeholder='Confirm Password'
        value={values.password2}
        onChange={handleChange}  
      />
      {errors.password2 && <p>{errors.password2}</p>}
    </div>
    <button className="formbtn">Sign In</button>
  </form>
    <p>Don't have an account? <a href='/' >Sign up</a></p>
  </Paper>
</div>
  )
}

export default SignUpForm