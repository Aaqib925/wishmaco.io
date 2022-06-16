import React from 'react'
import { TEAM_MEMBERS } from './dummyData'
import teamProfileStyles from './teamprofile.module.css'


const TeamProfiles = () => {
    return (
        <div className={teamProfileStyles.teamProfileContainer}>
            <div className={teamProfileStyles.teamImagesContainer}>
                {/* {
                    TEAM_MEMBERS.map(each => {
                        return (
                            <div key={each.id} className={teamProfileStyles.teamNameImageContainer} >
                                <div className={teamProfileStyles.teamImageContainer} >
                                    <img src={each.image} />
                                </div>
                                <span>Name</span>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default TeamProfiles