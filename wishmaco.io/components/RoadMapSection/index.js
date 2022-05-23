import React from 'react'
import NFTSection from '../Intro/NFTSection'
import { Button } from '../shared'
import CustomMarque from '../shared/marque'
import roadMapStyles from './roadmap.module.css'
import RoadMapDetails from './RoadMapDetails'

const RoadMapSection = () => {
    return (
        <div className={roadMapStyles.roadMapContainer}>
            <CustomMarque className={roadMapStyles.removeMarqueTopMargin} />
            <NFTSection />
            <CustomMarque title='Roadmap' />
            <div>
                <Button title='our roadmap will grow as we grow' className={roadMapStyles.roadMapButtonContainer} textClassName={roadMapStyles.roadMapButton} />
                <RoadMapDetails />
            </div>
        </div>
    )
}

export default RoadMapSection