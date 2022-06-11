import React from 'react'
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen'
import ImageFormat from '../ImageFormat'
import CustomMarque from '../shared/marque'
import guideLinesStyles from './guidelines.module.css'
import { SectionImageAndContent } from './helper'

const GuideLinesSection = () => {

    const isMobile = useCheckMobileScreen();

    const RenderImageAndContent = () => {
        return (
            <div>
                {
                    SectionImageAndContent.map(each => {
                        return (
                            <div className={guideLinesStyles.sectionContainer} key={each.id}>
                                <div className={guideLinesStyles.sectionImageContainer}>
                                    {
                                        each.images.map(eachImage => {
                                            return <img src={eachImage} alt="headshot" key={eachImage} />
                                        })
                                    }
                                </div>
                                <div className={guideLinesStyles.sectionTextContainer}>
                                    {
                                        each.text.map(eachText => {
                                            return (
                                                <div className={guideLinesStyles.sectionText} key={eachText}>
                                                    <span >{eachText}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className={guideLinesStyles.guideLinesContainer}>
                {
                    isMobile ?
                        <CustomMarque title='HEADSHOT DIRECTIONS' className={guideLinesStyles.removeMarqueTopMargin} />
                        : <></>
                }
                <div className={guideLinesStyles.initialSection}>
                    <span className={guideLinesStyles.lightBlueDesc}>PHOTO MUST BE WELL LET, CLEAR WITH NO DARK SHADOWS</span>
                    <span>NOTHING COVERS YOUR FACE, NO GLASSES, NO HAIR OR HANDS</span>
                </div>
                <RenderImageAndContent />
                {
                    !isMobile ?
                        <ImageFormat /> :
                        <></>
                }
            </div>
        </>
    )
}

export default GuideLinesSection