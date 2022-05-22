import React from 'react'
import Header from './Header'
import Logo from './Logo'
import introSectionStyles from './intro.module.css'
import NFTSection from './NFTSection'
import CustomMarque from '../shared/marque'

const IntroSection = () => {
    return (
        <div className={introSectionStyles.introSectionContainer}>
            <Header />
            <Logo />
            <CustomMarque />
            <NFTSection />
            <CustomMarque title='Mint' className={introSectionStyles.removeMarqueMarginBottom}/>
        </div>
    )
}

export default IntroSection