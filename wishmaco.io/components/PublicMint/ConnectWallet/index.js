import React from 'react'
import { Button } from '../../shared'
import connectWalletStyles from './connectwallet.module.css'
const ConnectWallet = () => {
    return (
        <div className={connectWalletStyles.connectWalletContainer}>
            <span className={connectWalletStyles.walletConnectText}>Connect Wallet before minting</span>
            <Button title='Connect' textClassName={connectWalletStyles.connectButtonText} className={connectWalletStyles.connectButton}/>
        </div>
    )
}

export default ConnectWallet