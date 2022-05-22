import React from 'react'
import mintCycleStyles from './mintcycle.module.css'
const MintCycle = () => {
    return (
        <div className={mintCycleStyles.mintCycleContainer}>
            <span className={mintCycleStyles.mintCycleText}>PUBLIC MINT</span>
            <span className={mintCycleStyles.mintCountText}>0000/1111</span>
        </div>
    )
}

export default MintCycle