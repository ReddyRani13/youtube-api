import axios from 'axios'



const KEY='AIzaSyDxOhTRLXvbgyHz7AI4ndnQj6GShe_4g5M';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }

});