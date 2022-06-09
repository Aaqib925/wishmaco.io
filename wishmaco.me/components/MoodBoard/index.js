import React from 'react'
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen'
import NFTSection from '../Intro/NFTSection'
import CustomMarque from '../shared/marque'
import moodBoardStyles from './moodboard.module.css'
import { MOOD_IMAGES_DATA } from './moodImages'
const MoodBoard = () => {

    const isMobile = useCheckMobileScreen();

    const RenderNftYourself = () => {
        return (
            <div className={moodBoardStyles.nftYourselfContainer}>
                <CustomMarque direction='right' title='WISHMACO' className={moodBoardStyles.removeMarqueTopMargin} />
                <NFTSection />
                <CustomMarque title='NFT YOURSELF' className={moodBoardStyles.removeMarqueBottomMargin} />
            </div>
        )
    }

    return (
        <div className={moodBoardStyles.moodBoardContainer}>
            <CustomMarque title='MOOD BOARD' className={moodBoardStyles.removeMarqueTopMargin} />
            <div className={moodBoardStyles.moodItemContainer}>
                <span>CHOOSE ONE</span>
            </div>
            <div className={moodBoardStyles.moodImagesContainer}>
                {
                    MOOD_IMAGES_DATA.map(each => {
                        return (
                            <div className={moodBoardStyles.eachMoodContainer} key={each.id}>
                                <img src={each.image} />
                                <span>{each.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            {
                !isMobile ?
                    <RenderNftYourself /> : <></>
            }
        </div>
    )
}

export default MoodBoard