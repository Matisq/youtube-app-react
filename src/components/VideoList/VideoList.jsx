import React, {Fragment} from 'react';
import VideoItem from '../VideoItem/VideoItem';

export const VideoList = ({videos}) => {
    const videosList = videos.map(video => (<VideoItem key={video.etag} video={video}/>));
    return (
        <Fragment>
            <div className="row">
                <p style={{
                    fontSize: '1rem'
                }}>Next</p>
                {videosList}
            </div>
        </Fragment>
    )
}