import React from 'react'
import { noSelfieIcon } from '../../constants/images'
import imageFormatStyles from './imageformat.module.css'

const ImageFormat = () => {
  return (
    <div className={imageFormatStyles.imageFormatContainer}>
        <img src={noSelfieIcon} alt="No selfie icon"/>
        <div className={imageFormatStyles.imageResolutionText}>
            <span className={imageFormatStyles.imageResolutionPinkText}>{"IMAGE RESOLUTION & FORMATS"}</span>
            <span>{"PHOTO RESOLUTION 4096 X 4096 & HIGHER ARE RECOMMENDED"}</span>
            <span>{"THE IMAGE FORMAT CAN BE .PNG .JPG .JPEG .BMP .TGA OR .GIF"}</span>
        </div>
    </div>
  )
}

export default ImageFormat