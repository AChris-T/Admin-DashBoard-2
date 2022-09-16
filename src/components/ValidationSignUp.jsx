export default function validationInfo(values){
    let errors={}

    if(!values.username.trim()){
        errors.username = "Username required"
    }
    if(!values.email){
        errors.email = "Email required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email ="Email address is invalid"
    }

    if (!values.password) {
        errors.password = "Password is required"
    }
    else if (!/^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*. ])[a-zA-Z0-9!@#$%^&*. ]{8,20}$/i.test(values.password)){
       errors.password= "Password should be 8-20 characters and include at least 1 characters, 1 number, and any special character"
    }

    if(!values.password2){
        errors.password2 ="Password is required"
    }
    else if (values.password2 !== values.password){
        errors.password2="Password do not Match"
    }

    return errors;
}

