import React from 'react'
import Button from './button'

const CustomInput = ({
    placeholder = "placeholder"
}) => {
  return (
    <div className={`customInputContainer`}>
        <input type="text" placeholder={placeholder}/>
        <Button title='Send' className={`customInputButtonContainer`} textClassName={`customInputButtonText`}/>
    </div>
  )
}

export default CustomInput