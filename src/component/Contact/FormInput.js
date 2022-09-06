import React, { useState } from 'react'

function FormInput(props) {

  const[focused, setFocused] = useState(false)
  const{label, onChange, id, errorMessage, ...inputProps} = props;
  const handleFocus = () => {
    setFocused(true)
  }
  return (
    <div>
        <label class="input-label">{label}</label>
        <input name={props.name} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput