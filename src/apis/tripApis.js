import axios from 'axios';

const getTrip = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}`
    );
    return response;
}

const getTrip2 = async () => {
    const response2 = await axios.get(
        `${process.env.REACT_APP_API_KEY2}`
    );
    return response2;
}

export {getTrip, getTrip2};