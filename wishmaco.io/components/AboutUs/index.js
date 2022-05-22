import React from 'react'
import CustomMarque from '../shared/marque'
import aboutUsStyles from './aboutus.module.css'
import AboutUsDetails from './AboutUsDetails'
import HowItWorks from './HowItWorks'

const AboutUsSection = () => {
    return (
        <div className={aboutUsStyles.aboutUsContainer}>
            <CustomMarque title='About Us' className={aboutUsStyles.removeMarqueTopMargin} />
            <AboutUsDetails />
            <HowItWorks/>
        </div>
    )
}

export default AboutUsSection