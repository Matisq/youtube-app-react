import {useState, useEffect} from 'react';
import api from './api';
const YT_API_KEY = process.env.REACT_APP_YT_API_KEY;

const useFetch = (initialURL, params) => {
    const {defaultResponse} = params;
    const [data,
        setData] = useState(defaultResponse);
    const [url,
        setUrl] = useState(initialURL);
    const [isLoading,
        setIsLoading] = useState(false);
    const [isError,
        setIsError] = useState(false);

    useEffect(() => {
        const doFetch = () => {
            setIsError(false);
            setIsLoading(true);
            setUrl(url);

            api
                .get(url, {
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: 5,
                    key: YT_API_KEY
                }
            })
                .catch(error => {
                    setIsError(true);
                    if (error.response) {
                        throw new Error(`Error: ${JSON.stringify(error.message)}`);
                    } else if (error.request) {
                        throw new Error(`Error: No response from the server`);
                    } else {
                        throw new Error('Error', error.message);
                    }
                })
                .then(response => {
                    setData(response.data.items)
                    setIsLoading(false);
                });
        }

        doFetch();
    }, [url]);

    return [data, isLoading, isError, setUrl];
}

export default useFetch;