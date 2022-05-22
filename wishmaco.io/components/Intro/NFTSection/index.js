import React from 'react'
import nftSectionStyles from './nftsection.module.css'
const NFTSection = () => {
    return (
        <div className={nftSectionStyles.nftSectionContainer}>
            <span className={nftSectionStyles.nftComingSoonText}>
                NFTS COMING SOON
            </span>
        </div>
    )
}

export default NFTSection