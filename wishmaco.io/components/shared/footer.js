import React from 'react'
import footerStyles from '../../styles/footer.module.css'
import Header from '../Intro/Header'
const Footer = () => {
    return (
        <div className={footerStyles.footerContainer}>
            <img src='/wishMacoLogo.png' className={footerStyles.footerLogo} />
            <Header className={footerStyles.footerIcons} />
        </div>
    )
}

export default Footer