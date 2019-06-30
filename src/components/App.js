import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import useFetch from '../routes/fetchHook';
import {SearchVideoBar} from './SearchVideoBar/SearchVideoBar';
import {VideoDetails} from './VideoDetails/VideoDetails';
import {VideoList} from './VideoList/VideoList';

const App = () => {
    const [videoName,
        setVideoName] = useState('Marvel');
    const [selectedVideo,
        setSelectedVideo] = useState('');

    const [data,
        isLoading,
        isError,
        setUrl] = useFetch(`/search/?q=${videoName}`, {defaultResponse: []});

    const handleVideoOnClick = (video) => {
        setSelectedVideo(video);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!videoName.trim().length) 
            return;
        setUrl(`/search/?q=${videoName}`);
        setVideoName('');

    }

    const handleChange = (e) => {
        const {value} = e.target;
        setVideoName(value);
    }

    return (
        <Container>
            <SearchVideoBar
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
                videoName={videoName}/> {isLoading
                ? <div className="spinner"></div>
                : <div className="row mt-5">
                    <div className="col-12 col-lg-8">
                        <VideoDetails selectedVideo={selectedVideo}/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <VideoList handleVideoOnClick={handleVideoOnClick} videos={data}/>
                    </div>
                </div>
}
            {isError && <div className="error">API Error: Fetch videos request failed.</div>}
        </Container>
    )
}

export default App;
