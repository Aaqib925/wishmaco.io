import React from 'react'
import { Button } from '../../shared'
import logoStyles from './logo.module.css'
const Logo = () => {
  return (
    <div className={logoStyles.logoContainer}>
        <img src="/wishMacoLogo.png" className={logoStyles.logoImage}/>
        <Button title='NFT YOURSELF' className={logoStyles.nftYourselfLogo}/>
    </div>
  )
}

export default Logo