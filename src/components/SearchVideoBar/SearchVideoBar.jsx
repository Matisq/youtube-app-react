import React from 'react';
import {Form} from 'react-bootstrap';

export const SearchVideoBar = () => {
    return (
        <Form className="video-form">
            <Form.Control
                name="video"
                placeholder="Type a youtube video name..."
                className="form-control video-form__input mt-4"/>
            <button type="submit" className="video-form__btn" variant="primary">Search</button>
        </Form>
    )
}