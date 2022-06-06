import React from 'react'
import Marquee from "react-fast-marquee";
import marqueStyles from '../../styles/marque.module.css'
import MarqueText from './marqueText';
const CustomMarque = ({ title = "WishMaco", className = "", direction = 'left' }) => {

    return (
        <Marquee gradient={false} direction={direction} className={`${marqueStyles.marqueContainer} ${className}`} speed={50}>
            {
                Array.from({ length: 15 }).map((each, index) => {
                    return (
                        <MarqueText key={index} title={title} />
                    )
                })
            }
        </Marquee>
    )
}

export default CustomMarque