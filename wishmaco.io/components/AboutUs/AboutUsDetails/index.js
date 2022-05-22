import React from 'react'
import { Button } from '../../shared'
import aboutUsDetailsSyles from './aboutusdetails.module.css'
const AboutUsDetails = () => {
    return (
        <div className={aboutUsDetailsSyles.aboutUsDetailsContainer}>
            <Button title='WishMaco is a customized 3d pfp project with your face in the nft' className={aboutUsDetailsSyles.buttonContainer} textClassName={aboutUsDetailsSyles.buttonText} />
            <span>
                WishMaco is a collection of 1555 NFTs
            </span>
            <span>
                divided into 1111 Public + 444 Elite
            </span>
            <span>
                on Ethereum blockchain
            </span>
        </div>
    )
}

export default AboutUsDetails