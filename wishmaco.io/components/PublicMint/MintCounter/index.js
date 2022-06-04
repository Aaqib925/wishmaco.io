import React, { useState } from 'react'
import { Button } from '../../shared'
import mintCounterStyles from './mintcounter.module.css';
const BUTTON_TYPE = {
    "ADD": "ADD",
    "SUBTRACT": "SUBTRACT"
}

const MintCounter = () => {
    const [mintCounter, setMintCounter] = useState(1);
    const [mintPrice, setMintPrice] = useState(0.1555);

    const RenderCounter = () => {
        return (
            <div className={mintCounterStyles.counterContainer}>
                <span className={mintCounterStyles.counterText}>{mintCounter}</span>
            </div>
        )
    }

    const handleClick = (buttonType) => {
        if (buttonType === BUTTON_TYPE.ADD && mintCounter < 5) {
            setMintCounter(mintCounter + 1);
            setMintPrice(mintPrice + 0.1555);
        } else if (buttonType === BUTTON_TYPE.SUBTRACT && mintCounter - 1 > 0) {
            setMintCounter(mintCounter - 1);
            setMintPrice(mintPrice - 0.1555);
        }
    }

    const RenderButton = ({ title, type, className = "" }) => {
        return (
            <div onClick={() => handleClick(type)} className={`${mintCounterStyles.buttonContainer} ${className}`}>
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
            <span className={mintCounterStyles.mintPriceText}>{mintPrice.toFixed(4)} ETH</span>

            <div className={mintCounterStyles.actionButtons}>
                <RenderButton className={mintCounterStyles.subtractIcon} title={<>&#8722;</>} type={BUTTON_TYPE.SUBTRACT} />
                <RenderCounter />
                <RenderButton title={<>&#10010;</>} type={BUTTON_TYPE.ADD} />
            </div>

            <div className={mintCounterStyles.mintButtons}>
                <RenderMintButton title="Male Mint" textClassName={mintCounterStyles.mintButtonText} className={mintCounterStyles.mintButton} />
                <RenderMintButton title="Female Mint" textClassName={mintCounterStyles.mintButtonText} className={mintCounterStyles.mintButton} />
            </div>
        </div>
    )
}

export default MintCounter