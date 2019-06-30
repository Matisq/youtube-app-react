import React from 'react';
import './SearchVideoBar.css';
import {Form} from 'react-bootstrap';

export const SearchVideoBar = ({handleFormSubmit, handleChange, videoName}) => {
    return (
        <Form className="video-form" onSubmit={handleFormSubmit}>
            <Form.Control
                name="video"
                placeholder="Type a youtube video name..."
                className="form-control video-form__input mt-4"
                onChange={handleChange}
                value={videoName}/>
            <button type="submit" className="video-form__btn" variant="primary">Search</button>
        </Form>
    )
}