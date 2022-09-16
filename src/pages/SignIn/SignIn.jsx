import React from 'react'
import "./signin.scss"
import { useState } from 'react'
import FormInput from '../../components/FormInput'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const SignIn = () => {
    const[values, setValues]=useState({
        fullName:"",
        username:"",
        birthday:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const inputs=[
        {
            id:1,
            name:"fullName",
            type:"text",
            placeholder:"Full Name",
            errorMessage:"FullName should be 5-30 characters and special character is not allowed",
            label:"Full Name",
            pattern:"^[A-Za-z- ]{5,30}$",
            required:true,
        },
        {
            id:2,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be 3-10 characters and special character allowed",
            label:"Username",
            pattern:"^[A-Za-z0-9]{5,10}$",
            required:true,
        },
        {
            id:3,
            name:"birthday",
            type:"text",
            placeholder:"Birthday",
            errorMessage:"Date of Birth must not be less than 16 years",
            label:"Birthday",
            patter:"^(16?[1-9]|[1-9][5-9]|[1][1-9][1-9]|200)$",
        
        },
        {
            id:4,
            name:"email",
            type:"text",
            placeholder:"Email",
            errorMessage:"It should be a valid email",
            label:"Email",
            pattern:'[a-z0-9]+@[a-z]+\.[a-z]{2,3}',
            required:true,
        },
        {
            id:5,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters and include at least 1 characters, 1 number, and any special character",
            label:"Password",
            pattern:"^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*. ])[a-zA-Z0-9!@#$%^&*. ]{8,20}$",
            required:true,
        },
        {
            id:6,
            name:"confirmPasswword",
            type:"password",
            placeholder:"Confirm Passwword",
            errorMessage:"password don't match!",
            label:"Confirm Passwword",
            pattern:values.password,
            required:true,
        }
    ]
    

    const handleSubmit=(e)=>{
        e.preventDefault();
    const data = new FormData(e.target)

        console.log(Object.fromEntries(data.entries()))
    };
    const onChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    console.log(values)
  return (
    <div className="SignIn">
        <Box className="box"
        sx={{
        display: 'flex',
         flexWrap: 'wrap',
        '& > :not(style)': {
        m: 1,
        width: "auto",
        height: "auto",
        },
         }}
        >
        <Paper elevation={3} className="boxTitle">

         </Paper>
      </Box>
        <Paper elevation={3} className="boxForm">
            <form onSubmit={handleSubmit}>
             {inputs.map((inputs)=>(
             <FormInput key={inputs.id} {...inputs} value={values[inputs.name]} onChange={onChange}/>
              ))}
            <button>Submit</button>
            </form>
        </Paper>
    </div>
    )
        }
        
export default SignIn