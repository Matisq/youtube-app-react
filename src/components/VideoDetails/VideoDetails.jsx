import React from 'react';
import {ResponsiveEmbed, Card} from 'react-bootstrap';

export const VideoDetails = ({selectedVideo}) => {
    if (!selectedVideo) 
        return null;
    const VIDEO_URL = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    const {title, channelTitle, description, publishedAt} = selectedVideo.snippet;
    const videoCreatedDate = new Date(publishedAt);
    const month = videoCreatedDate.toLocaleString('en-us', {month: 'long'});

    return (
        <div style={{
            width: '100%',
            height: '300'
        }}>
            <ResponsiveEmbed
                aspect="a16by9"
                style={{
                maxHeight: 400
            }}>
                <embed type="video/webm" src={VIDEO_URL}/>
            </ResponsiveEmbed>
            <Card className="mt-3">
                <Card.Body>
                    <h2 className="video__heading">{title.includes('&amp')
                            ? title.replace('&amp;', '&')
                            : title}
                    </h2>
                    <p className="video__author">{channelTitle}</p>
                    <p className="date">{`Published at
                ${month}
                ${videoCreatedDate.getDate()}
                ${videoCreatedDate.getFullYear()}`}</p>
                    <div className="description">
                        {description}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
