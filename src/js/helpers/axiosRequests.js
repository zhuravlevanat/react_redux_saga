import axios from 'axios';
import qs from 'querystring';
axios.defaults.baseURL = 'http://localhost:1010';

export const getDBRequest = async (relativeURL) => {
    try {
        const { data } = await axios.get(relativeURL);
        if (data.isError) {
            throw data.data;
        }
        return data;
    } catch (err) {
        throw new Error(err);
    }
};

export const postDBRequest = async (relativeURL, body) => {
    try {
        const { data } = await axios.post(relativeURL, qs.stringify(body));
        if (data.isError) {
            throw data.data;
        }
        return data;
    } catch (err) {
        throw new Error(err);
    }
};