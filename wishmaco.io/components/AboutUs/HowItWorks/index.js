import React from 'react'
import Button from '../../shared/button'
import CustomMarque from '../../shared/marque'
import howItWorksStyles from './howitworks.module.css'

const HowItWorks = () => {
    return (
        <div className={howItWorksStyles.howItWorksContainer}>
            <CustomMarque direction='right' title='How It Works' className={howItWorksStyles.removeMarqueTopMargin} />
            <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextAddTopMargin}`}>
                Mint the HEADLESS NFT Then upload
            </span>
            <div className={howItWorksStyles.guidelineContainer}>
                <span className={howItWorksStyles.guidelineText}>
                    your headshot to
                </span>
                <Button title='NFT yourself' className={howItWorksStyles.nftYourSelfButton} textClassName={howItWorksStyles.nftYourSelfButtonText} />
            </div>
            <div className={howItWorksStyles.personalizeTextContainer}>
                <span className={howItWorksStyles.personalizeText}>
                    A personalized nft with your face will be sent
                </span>
                <span className={howItWorksStyles.personalizeText}>
                    {`to your wallet & you'll end up with 2 nfts`}
                </span>
            </div>
            <div className={howItWorksStyles.personalizeTextContainer}>
                <span className={howItWorksStyles.guidelineText}>
                    Each wallet address is limited to 1 customizatize
                </span>
                <span className={howItWorksStyles.guidelineText}>
                    per nft; only then the headless nft is restricted
                </span>
                <span className={howItWorksStyles.guidelineText}>
                    from transfer, but it will still be sellable
                </span>
            </div>
        </div>
    )
}

export default HowItWorks