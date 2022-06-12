import React from 'react'
import { CustomInput } from '../../shared'
import roadMapDetailStyles from './roadmapdetails.module.css'

const RoadMapDetails = () => {
    return (
        <div className={roadMapDetailStyles.roadMapDetailsContainer}>
            <span className={`${roadMapDetailStyles.roadMapTextStyles} ${roadMapDetailStyles.containerDesk}`}>
                A % will be to support mental health
            </span>
            <span className={`${roadMapDetailStyles.roadMapTextStyles} ${roadMapDetailStyles.containerMobile}`}>
                A % will be to
            </span>
            <span className={`${roadMapDetailStyles.roadMapTextStyles} ${roadMapDetailStyles.removeTopPadding} ${roadMapDetailStyles.containerMobile}`}>
                support mental health
            </span>
            <div className={roadMapDetailStyles.feedbackContainer}>
                <span>Suggest any cause</span>
                <CustomInput className={roadMapDetailStyles.textInputContainer} placeholder='Enter your email, The Cause, Reason or Foundation..  ' />
            </div>
            <div className={roadMapDetailStyles.metverseTextContainer}>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerDesk}`}>we will buy a land in metaverse</span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerMobile}`}>we will buy a land </span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerDesk}`}>to build our virtual store</span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerMobile}`}>in metaverse to build</span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerMobile}`}>our virtual store</span>
            </div>
            <div className={roadMapDetailStyles.metverseTextContainer}>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerDesk}`}>{"We're looking into integrating our nfts"}</span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerMobile}`}>{"We're looking into "}</span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerDesk}`}>as avatars in metaverse</span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerMobile}`}>integrating our nfts </span>
                <span className={`${roadMapDetailStyles.metaverseTextStyles} ${roadMapDetailStyles.containerMobile}`}> as avatars in metaverse</span>
            </div>
        </div>
    )
}

export default RoadMapDetails