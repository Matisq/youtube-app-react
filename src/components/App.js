import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import {SearchVideoBar} from './SearchVideoBar/SearchVideoBar';
import {VideoDetails} from './VideoDetails/VideoDetails';
import {VideoList} from './VideoList/VideoList';

const App = () => {
    const [videoName, setVideoName] = useState('Marvel');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!videoName.trim().length) return;
        setVideoName('');
    
    }
    
    const handleChange = (e) => {
        const { value } = e.target;
        setVideoName(value);
    }
    
    return (
        <Container>
             <SearchVideoBar handleChange={handleChange} handleFormSubmit={handleFormSubmit} videoName={videoName}/>
            <div className="row mt-5">
                <div className="col-12 col-lg-8">
                    <VideoDetails/>
                </div>
                <div className="col-12 col-lg-4">
                    <VideoList/>
                </div>
            </div>
        </Container>
    )
}

export default App;
