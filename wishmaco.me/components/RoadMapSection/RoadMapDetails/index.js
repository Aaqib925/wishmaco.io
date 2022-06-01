import React from 'react'
import { CustomInput } from '../../shared'
import roadMapDetailStyles from './roadmapdetails.module.css'

const RoadMapDetails = () => {
    return (
        <div className={roadMapDetailStyles.roadMapDetailsContainer}>
            <span className={roadMapDetailStyles.roadMapTextStyles}>
                A % will be to support mental health
            </span>
            <div className={roadMapDetailStyles.feedbackContainer}>
                <span>Suggest any cause</span>
                <CustomInput className={roadMapDetailStyles.textInputContainer} placeholder='Enter your email, The Cause, Reason or Foundation..  ' />
            </div>
            <div className={roadMapDetailStyles.metverseTextContainer}>
                <span className={roadMapDetailStyles.metaverseTextStyles}>we will buy a land in metaverse</span>
                <span className={roadMapDetailStyles.metaverseTextStyles}>to build our virtual store</span>
            </div>
            <div className={roadMapDetailStyles.metverseTextContainer}>
                <span className={roadMapDetailStyles.metaverseTextStyles}>We're looking to integrate our nfts </span>
                <span className={roadMapDetailStyles.metaverseTextStyles}>as avatars in metaverse</span>
            </div>
        </div>
    )
}

export default RoadMapDetails