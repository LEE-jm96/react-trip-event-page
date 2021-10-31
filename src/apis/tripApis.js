import axios from 'axios';

const getLoc = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}`
    );
    return response;
}

const getTheme = async () => {
    const response2 = await axios.get(
        `${process.env.REACT_APP_API_KEY2}`
    );
    return response2;
}

export {getLoc, getTheme};