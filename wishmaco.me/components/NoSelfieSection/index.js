import React from 'react'
import ImageFormat from '../ImageFormat'
import NFTSection from '../Intro/NFTSection';
import CustomMarque from '../shared/marque';
import selfieStyles from './selfie.module.css';


const NoSelfieSection = () => {
    return (
        <div className={selfieStyles.sectionContainer}>
            <CustomMarque direction='right' className={`${selfieStyles.removeMarqueTopMargin} ${selfieStyles.addZIndex}`} title='HEADSHOT DIRECTIONS' />
            <ImageFormat />
            <CustomMarque title='NFT YOURSELF' className={selfieStyles.addZIndex} />
            <NFTSection />
            <CustomMarque direction='right' title={'WISHMACO'} className={`${selfieStyles.removeMarqueMarginBottom} ${selfieStyles.addZIndex}`} />
        </div>
    )
}

export default NoSelfieSection