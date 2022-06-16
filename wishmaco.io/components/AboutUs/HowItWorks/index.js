import React from 'react'
import Button from '../../shared/button'
import CustomMarque from '../../shared/marque'
import howItWorksStyles from './howitworks.module.css'

const HowItWorks = () => {
    return (
        <div className={howItWorksStyles.howItWorksContainer}>
            <CustomMarque direction='right' title='How It Works' className={howItWorksStyles.removeMarqueTopMargin} />
            <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextAddTopMargin} ${howItWorksStyles.guidelineTextDesk}`}>
                Mint the HEADLESS NFT Then upload
            </span>
            <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextAddTopMargin} ${howItWorksStyles.guidelineTextMob}`}>
                Mint the HEADLESS NFT
            </span>
            <div className={howItWorksStyles.guidelineContainer}>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextDesk}`}>
                    your headshot to
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextMob}`}>
                    Then upload your headshot to
                </span>
                <Button title='NFT yourself' className={`glowButton2 ${howItWorksStyles.nftYourSelfButton}`} textClassName={howItWorksStyles.nftYourSelfButtonText} />
            </div>
            <div className={howItWorksStyles.personalizeTextContainer}>
                <span className={`${howItWorksStyles.personalizeText}  ${howItWorksStyles.guidelineTextDesk}`}>
                    A personalized nft with your face will be sent
                </span>
                <span className={`${howItWorksStyles.personalizeText}  ${howItWorksStyles.guidelineTextMob}`}>
                    A personalized nft with your
                </span>
                <span className={`${howItWorksStyles.personalizeText} ${howItWorksStyles.guidelineTextDesk}`}>
                    {`to your wallet & you'll end up with 2 nfts`}
                </span>
                <span className={`${howItWorksStyles.personalizeText} ${howItWorksStyles.guidelineTextMob}`}>
                    {`face will be sent to your wallet & you'll end up with 2 nfts`}
                </span>
            </div>
            <div className={howItWorksStyles.personalizeTextContainer}>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextDesk}`}>
                    Each wallet address is limited to 1 customise
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextMob}`}>
                    Each wallet address is limited
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextDesk}`}>
                    per nft; only then the headless nft is restricted
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextMob}`}>
                    To 1 customise per nft;
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextMob}`}>
                    only then the headless nft is
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextMob}`}>
                    restricted from transfer,
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextDesk}`}>
                    from transfer, however it will still be sellable
                </span>
                <span className={`${howItWorksStyles.guidelineText} ${howItWorksStyles.guidelineTextMob}`}>
                    however it will still be sellable
                </span>
            </div>
        </div>
    )
}

export default HowItWorks