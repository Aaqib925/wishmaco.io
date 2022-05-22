import moment from 'moment';
import React, { useState, useEffect } from 'react'
import { formatTimerDuration } from '../../../utils';
import timeToDropStyles from './timetodrop.module.css'

const endTime = moment().add(20, 'days');

const TimeToDrop = () => {
    const [duration, setDuration] = useState([]);
    useEffect(() => {
        let interval = setInterval(() => {
            setDuration(formatTimerDuration(moment(), endTime));
        }, 1000)
        return () => clearInterval(interval)
    }, [duration])


    const RenderTimer = () => {
        return (
            <div className={timeToDropStyles.timerContainer}>
                {
                    duration?.map((each, index) => {
                        return (
                            <React.Fragment key={`${each?.key}-${index}`}>
                                <div className={timeToDropStyles.eachTimerContainer} >
                                    <div style={{ display: 'flex' }}>
                                        {/* <span className={timeToDropStyles.eachCountText} >{each?.count}</span> */}
                                        {
                                            each?.count.toString().split('').map(count => {
                                                return (
                                                    <div key={count} className={timeToDropStyles.eachCountTextContainer}>
                                                        <span className={timeToDropStyles.eachCountText} >{count}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <span className={timeToDropStyles.eachCountKey} >{each?.key}</span>
                                </div>
                                <div className={timeToDropStyles.eachCountSeperatorContainer}>
                                    {
                                        index + 1 < duration.length ?
                                            <span className={timeToDropStyles.eachCountSeperator} >:</span>
                                            : <></>
                                    }
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={timeToDropStyles.timeToDropContainer}>
            <span className={timeToDropStyles.timeDropText}>Time To drop</span>
            <RenderTimer />
        </div>
    )
}

export default TimeToDrop