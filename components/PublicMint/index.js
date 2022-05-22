import React from 'react'
import ConnectWallet from './ConnectWallet'
import MintCounter from './MintCounter'
import MintCycle from './MintCycle'
import publicMintStyles from './publicmint.module.css'
import TimeToDrop from './TimeToDrop'

const PublicMintSection = () => {
  return (
    <div className={publicMintStyles.publicMintContainer}>
      <MintCycle />
      <ConnectWallet />
      <MintCounter />
      <TimeToDrop />
    </div>
  )
}

export default PublicMintSection