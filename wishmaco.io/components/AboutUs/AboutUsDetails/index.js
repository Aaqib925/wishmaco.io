import React from 'react'
import { Button } from '../../shared'
import aboutUsDetailsSyles from './aboutusdetails.module.css'
const AboutUsDetails = () => {
    return (
        <div className={aboutUsDetailsSyles.aboutUsDetailsContainer}>
            <Button title='WishMaco is a custom 3d pfp project with your face in the nft' className={aboutUsDetailsSyles.buttonContainer} textClassName={aboutUsDetailsSyles.buttonText} />
            <div className={aboutUsDetailsSyles.aboutUsDetailsText}>
                <span>
                    WishMaco is a collection of 1555 NFTS
                </span>
                <span>
                    divided into 1111 Public + 444 Elite
                </span>
                <span>
                    on the Ethereum blockchain
                </span>
            </div>
        </div>
    )
}

export default AboutUsDetails