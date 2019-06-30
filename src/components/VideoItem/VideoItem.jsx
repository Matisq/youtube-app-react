import React from 'react';
import './VideoItem.css';
import {Media} from 'react-bootstrap';

const VideoItem = ({video, handleVideoOnClick}) => {
    const {thumbnails, title, channelTitle} = video.snippet;
    const IMG_URL = thumbnails.medium.url;

    return (
        <Media
            onClick={() => handleVideoOnClick(video)}
            className="mt-3 mb-3 video-item">
            <img className="mr-3 video-item__img" src={IMG_URL} alt="Generic placeholder"/>
            <Media.Body className="align-self-center">
                <h3 className="video__heading">{title.includes('&amp')
                        ? title.replace('&amp;', '&')
                        : title}</h3>
                <p>{channelTitle}</p>
            </Media.Body>
        </Media>
    )
}

export default VideoItem;