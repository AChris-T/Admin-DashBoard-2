import React from 'react'
import "./formInput.scss"


const FormInput = (props) => {
    const {label,errorMessage, onChange, id, ...inputsProps}=props

  return (
    <div className="formInput">
        <h4>{label}</h4>
        <input label={label} {...inputsProps} onChange={onChange} className="textField" required/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
