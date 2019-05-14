import axios from 'axios' 



const fetchfromApi = (league: String) => {
    const url = '/data';
    return axios
        .get(url, { params: { league } })
        .then(function (response) {
            return response.data
        })
        .catch(function (err) {
            console.error(err)
        })
}

;

export default fetchfromApi;
