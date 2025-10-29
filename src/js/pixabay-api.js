import axios from 'axios';

const API_KEY = '52952317-f5e88216fd9e8d5aa3001977e';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
    }

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching images: ', error); 
        throw new Error('Failed to fetch images from Pixabay.');
    }

    // const response = await axios.get(BASE_URL, { params });

    // return response.data;

}