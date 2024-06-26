import { useEffect, useState } from 'react';
import axios from 'axios';

const useListEvents = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {

            try {
                const apiOptions = {
                    server: ''
                };
                if (process.env.NODE_ENV === 'production') {
                    apiOptions.server = 'https://ladivinap4-604b84fbbc08.herokuapp.com/'
                } else {
                    apiOptions.server = 'http://localhost:5000/'
                }
                const response = await axios.get(`${apiOptions.server}api/events`);
                setEvents(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return { events, isLoading };
};

export default useListEvents;