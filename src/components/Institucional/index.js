import React from 'react';
import Video from '../../videos/video.mp4';
import { InstContainer, InstBg, VideoBg } from './InstitucionalElements';

const Institucional = () => {
    return (
        <InstContainer>
            <InstBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </InstBg>
        </InstContainer>
    )
}

export default Institucional;
