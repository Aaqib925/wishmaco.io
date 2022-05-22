import React from 'react'

const Button = ({
    title = "Button",
    className = "",
    handleClick = () => { },
    textClassName = "",
    plusIcon = false
}) => {

    return (
        <div
            className={`buttonStyles ${className}`}
            type="button"
            onClick={handleClick}
        >
            <span className={`buttonTextStyles ${textClassName}`}>
                {title}
            </span>
        </div>
    )
}

export default Button