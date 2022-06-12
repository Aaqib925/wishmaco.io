import React from 'react'
import { Button } from '../../shared'
import aboutUsDetailsSyles from './aboutusdetails.module.css'
const AboutUsDetails = () => {
    return (
        <div className={aboutUsDetailsSyles.aboutUsDetailsContainer}>
            <div className={`${aboutUsDetailsSyles.buttonContainer} ${aboutUsDetailsSyles.buttonContainerMob}`} >
                <span className={aboutUsDetailsSyles.buttonText}>WishMaco is a custom </span>
                <span className={aboutUsDetailsSyles.buttonText}>3d pfp project with your</span>
                <span className={aboutUsDetailsSyles.buttonText}>face in the nft</span>
            </div>
            <Button title='WishMaco is a custom 3d pfp project with your face in the nft' className={aboutUsDetailsSyles.buttonContainer} textClassName={aboutUsDetailsSyles.buttonText} />
            <div className={`${aboutUsDetailsSyles.aboutUsDetailsText} ${aboutUsDetailsSyles.aboutUsDetailDesk}`}>
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
            <div className={`${aboutUsDetailsSyles.aboutUsDetailsText} ${aboutUsDetailsSyles.aboutUsDetailMob}`}>
                <span>
                    WishMaco is a collection of
                </span>
                <span>
                    1555 NFTS divided into
                </span>
                <span>
                    1111 Public + 444 Elite on
                </span>
                <span>
                    the Ethereum blockchain
                </span>
            </div>
        </div>
    )
}

export default AboutUsDetails