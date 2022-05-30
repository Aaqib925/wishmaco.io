import React, { useEffect } from 'react'
import $ from 'jquery';
import initPagePilling from './jquery.pagepiling'
import animationStyles from './animation.module.css'
import IntroSection from '../Intro';
import PublicMintSection from '../PublicMint';
import AboutUsSection from '../AboutUs';
import RoadMapSection from '../RoadMapSection';
import TeamSection from '../Team';

const MobileView = () => {
    useEffect(() => {
        adjustScreenView()
        initPagePilling($, document, window);
        $(document).ready(function () {
            $('#pagepiling').pagepiling({
                navigation: null
            });
        });

        return removeScreenView
    }, []);

    const adjustScreenView = () => {
        const htmlContainer = document.querySelector('html');
        const bodyContainer = document.querySelector('body');

        htmlContainer.classList.add('setHtmlOverflowHidden');
        bodyContainer.classList.add('setBodyOverflowHidden');
    }

    const removeScreenView = () => {
        const htmlContainer = document.querySelector('html');
        const bodyContainer = document.querySelector('body');

        htmlContainer.classList.remove('setHtmlOverflowHidden');
        bodyContainer.classList.remove('setBodyOverflowHidden');
    }

    return (
        <>
            <div id="pagepiling">
                <div className="section ">
                    <div className={animationStyles.sectionContainer} >
                        <IntroSection />
                    </div>
                </div>
                <div className="section">
                    <div className={animationStyles.sectionContainer} >
                        <PublicMintSection />
                    </div>
                </div>
                <div className="section">
                    <div className={animationStyles.sectionContainer} >
                        <AboutUsSection />
                    </div>
                </div>
                <div className="section">
                    <div className={animationStyles.sectionContainer} >
                        <RoadMapSection />
                    </div>
                </div>
                <div className="section">
                    <div className={animationStyles.sectionContainer} >
                        <TeamSection />
                    </div>
                </div>

            </div>
        </>
    )
}

export default MobileView