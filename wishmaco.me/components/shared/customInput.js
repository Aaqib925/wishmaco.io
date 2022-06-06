import React from 'react'
import Button from './button'

const CustomInput = ({
  placeholder = "placeholder",
  className = "",
  rightButton = false,
  buttonClassName = "",
  textClassName = ""
}) => {
  return (
    <div className={`customInputContainer ${className}`}>
      <input type="text" placeholder={placeholder} />
      {
        rightButton ?
          <Button title={rightButton} className={`customInputButtonContainer ${buttonClassName}`} textClassName={`customInputButtonText ${textClassName}`} />
          : <></>
      }
    </div>
  )
}

export default CustomInput