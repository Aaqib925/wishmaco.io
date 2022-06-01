import React from 'react'

const MarqueText = ({ title }) => {
    return (
        <div >
            <span className={"marque-dot"}>&#183;</span>
            <span className={"marque-text"}>{title}</span>
        </div>
    )
}

export default MarqueText   