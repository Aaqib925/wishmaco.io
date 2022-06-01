import React from 'react'
import Button from './button'

const CustomInput = ({
  placeholder = "placeholder",
  className = ""
}) => {
  return (
    <div className={`customInputContainer ${className}`}>
      <input type="text" placeholder={placeholder} />
      <Button title='Send' className={`customInputButtonContainer`} textClassName={`customInputButtonText`} />
    </div>
  )
}

export default CustomInput