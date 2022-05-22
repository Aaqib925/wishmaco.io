import React from 'react'
import Marquee from "react-fast-marquee";
import marqueStyles from '../../styles/marque.module.css'
import MarqueText from './marqueText';
const CustomMarque = ({ title = "WishMaco", className = ""}) => {
    return (
        <Marquee gradient={false} className={`${marqueStyles.marqueContainer} ${className}`} speed={50}>
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