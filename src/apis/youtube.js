import axios from 'axios';

const KEY = 'AIzaSyBn-E3Q9mHOtleOewnBSg5ExPrclun8vHk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})