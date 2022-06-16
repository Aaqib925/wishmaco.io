import React, { useEffect } from 'react'
import $ from 'jquery';
import initPagePilling from './jquery.pagepiling'
import animationStyles from './animation.module.css'
import IntroSection from '../Intro';
import GuideLinesSection from '../Guidelines';
import MoodBoard from '../MoodBoard';
import FormSection from '../FormSection';
import { Footer } from '../shared';
import NoSelfieSection from '../NoSelfieSection';

const MobileView = () => {
    // useEffect(() => {
    //     adjustScreenView()
    //     initPagePilling($, document, window);
    //     $(document).ready(function () {
    //         $('#pagepiling').pagepiling({
    //             navigation: null
    //         });
    //     });

    //     return removeScreenView
    // }, []);

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
            <div>
                <div >
                    <div className={animationStyles.sectionContainer} >
                        <IntroSection />
                    </div>
                </div>
                <div >
                    <div className={animationStyles.sectionContainer} >
                        <GuideLinesSection />
                    </div>
                </div>
                <div >
                    <div className={animationStyles.sectionContainer} >
                        <NoSelfieSection />
                    </div>
                </div>
                <div >
                    <div className={animationStyles.sectionContainer} >
                        <MoodBoard />
                    </div>
                </div>
                <div >
                    <div className={animationStyles.sectionContainer} >
                        <FormSection />
                    </div>
                </div>
                {/* 
               
               
                <div className="section">
                    <div className={animationStyles.sectionContainer} >
                        <Footer />
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default MobileView