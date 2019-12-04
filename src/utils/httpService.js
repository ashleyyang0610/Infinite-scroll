import axios from 'axios';

const _get = (url, urlParams) => {
    let fetchUrl = url;
    Object.keys(urlParams).forEach(key => {
        fetchUrl = fetchUrl.replace(`{${key}}`, `${key}=${urlParams[key]}`);
    });
    return axios.get(fetchUrl);
};

export default _get;
