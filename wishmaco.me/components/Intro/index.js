import React from 'react'
import Header from './Header'
import Logo from './Logo'
import introSectionStyles from './intro.module.css'
import NFTSection from './NFTSection'
import CustomMarque from '../shared/marque'
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen'

const IntroSection = () => {

    return (
        <div className={introSectionStyles.introSectionContainer}>
            <Header />
            <Logo />
            <CustomMarque title='NFT YOURSELF' className={introSectionStyles.removeMarqueMarginTop} />
            <NFTSection />
            <CustomMarque direction='right' title={'HEADSHOT DIRECTIONS'} className={introSectionStyles.removeMarqueMarginBottom} />
        </div>
    )
}

export default IntroSection