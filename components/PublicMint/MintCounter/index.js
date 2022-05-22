import React, { useState } from 'react'
import { Button } from '../../shared'
import mintCounterStyles from './mintcounter.module.css'
const MintCounter = () => {
    const [mintCounter, setMintCounter] = useState(0)

    const RenderCounter = () => {
        return (
            <div className={mintCounterStyles.counterContainer}>
                <span className={mintCounterStyles.counterText}>{mintCounter}</span>
            </div>
        )
    }

    const RenderButton = ({ title }) => {
        return (
            <div className={mintCounterStyles.buttonContainer}>
                <span className={mintCounterStyles.counterText}>{title}</span>
            </div>
        )
    }

    const RenderMintButton = (props) => {
        return (
            <Button {...props} />
        )
    }

    return (
        <div className={mintCounterStyles.mintCounterContainer}>
            <span className={mintCounterStyles.mintPriceText}>0.1555 ETH</span>

            <div className={mintCounterStyles.actionButtons}>
                <RenderButton title={<>&#8722;</>} />
                <RenderCounter />
                <RenderButton title={<>&#10010;</>} />
            </div>

            <div className={mintCounterStyles.mintButtons}>
                <RenderMintButton title="Male Mint" className={mintCounterStyles.mintButton} />
                <RenderMintButton title="Female Mint" className={mintCounterStyles.mintButton} />
            </div>
        </div>
    )
}

export default MintCounter