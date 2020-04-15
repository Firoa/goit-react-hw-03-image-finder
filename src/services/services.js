import axios from 'axios';
const baseUrl = 'https://pixabay.com/api/';
const key = '16009897-4c38efcfe1bde2f5cf5e4fbad';
const fetchImgWithQuery = async (query, pageNumber = 1,pagination = 12) => {
  const response = await axios
        .get(`${baseUrl}?q=${query}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=${pagination}`);
        console.log(response);
    return response.data.hits;
};

export default fetchImgWithQuery;
