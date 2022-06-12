import React from 'react'
import Button from './button'

const CustomInput = ({
  placeholder = "placeholder",
  className = ""
}) => {
  return (
    <div className={`customInputContainer ${className}`}>
      <input type="text" placeholder={placeholder} />
      <textarea type="text" placeholder={placeholder} />
      <div className={'customInputContainerButton '}>
        <Button title='Send' className={`customInputButtonContainer`} textClassName={`customInputButtonText`} />
      </div>
    </div>
  )
}

export default CustomInput