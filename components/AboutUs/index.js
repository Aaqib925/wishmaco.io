import React from 'react'
import CustomMarque from '../shared/marque'
import aboutUsStyles from './aboutus.module.css'

const AboutUsSection = () => {
    return (
        <div className={aboutUsStyles.aboutUsContainer}>
            <CustomMarque title='About Us' className={aboutUsStyles.removeMarqueTopMargin} />
        </div>
    )
}

export default AboutUsSection