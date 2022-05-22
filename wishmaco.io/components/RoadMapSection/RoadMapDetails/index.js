import React from 'react'
import roadMapDetailStyles from './roadmapdetails.module.css'

const RoadMapDetails = () => {
    return (
        <div className={roadMapDetailStyles.roadMapDetailsContainer}>
            <span className={roadMapDetailStyles.roadMapTextStyles}>
                A % will be to support mental health
            </span>
            <div className={roadMapDetailStyles.feedbackContainer}>
                <span>Suggest any cause</span>
            </div>
        </div>
    )
}

export default RoadMapDetails