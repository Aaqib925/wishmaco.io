import React from 'react'
import Header from './Header'
import Logo from './Logo'
import introSectionStyles from './intro.module.css'
import NFTSection from './NFTSection'
import CustomMarque from '../shared/marque'
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen'

const IntroSection = () => {
    const isMobile = useCheckMobileScreen();

    return (
        <div className={introSectionStyles.introSectionContainer}>
            <Header />
            <Logo />
            <CustomMarque title='WISHMACO' className={introSectionStyles.removeMarqueMarginTop} />
            <NFTSection />
            <CustomMarque direction='right' title='Mints' className={introSectionStyles.removeMarqueMarginBottom} />
        </div>
    )
}

export default IntroSection