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
            <div className={roadMapStyles.nftSectionContainer}>
                <NFTSection />
            </div>
            <CustomMarque title='Roadmap' direction='right' className={roadMapStyles.removeMarqueTopMargin} />
            <div className={roadMapStyles.containerPadding}>
                <Button title='our roadmap will grow as we grow' className={`${roadMapStyles.roadMapButtonContainer} ${roadMapStyles.roadMapButtonDesk}`} textClassName={roadMapStyles.roadMapButton} />
                <div className={`${roadMapStyles.roadMapButtonContainer} ${roadMapStyles.roadMapButtonMob}`}>
                    <span className={roadMapStyles.roadMapButtonMobButonText}>our roadmap will</span>
                    <span className={roadMapStyles.roadMapButtonMobButonText}>grow as we grow</span>
                </div>
                <RoadMapDetails />
            </div>
        </div >
    )
}

export default RoadMapSection