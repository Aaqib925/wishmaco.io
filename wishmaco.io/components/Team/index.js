import React from 'react'
import { Footer } from '../shared'
import CustomMarque from '../shared/marque'
import teamStyles from './team.module.css'
import TeamProfiles from './TeamProfiles'

const TeamSection = () => {
    return (
        <div className={teamStyles.teamContainer}>
            <CustomMarque title='The team' className={teamStyles.teamMarqueTopPadding} />
            {/* <TeamProfiles /> */}
            <Footer />
        </div>
    )
}

export default TeamSection