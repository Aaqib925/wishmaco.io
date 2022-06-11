import React from 'react'
import ImageFormat from '../ImageFormat'
import NFTSection from '../Intro/NFTSection';
import CustomMarque from '../shared/marque';
import selfieStyles from './selfie.module.css';


const NoSelfieSection = () => {
    return (
        <div className={selfieStyles.sectionContainer}>
            <CustomMarque direction='right' className={selfieStyles.removeMarqueTopMargin} title='HEADSHOT DIRECTIONS' />
            <ImageFormat />
            <CustomMarque title='NFT YOURSELF' />
            <NFTSection />
            <CustomMarque direction='right' title={'WISHMACO'} className={selfieStyles.removeMarqueMarginBottom} />
        </div>
    )
}

export default NoSelfieSection