import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
} from './js/render-functions';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]')

async function onFormSubmit(event) {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);
        const images = data.hits;

        if (images.length === 0) {
            iziToast({
                title: 'No result',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: '#ef4040'
            });
        } else {
            createGallery(images);
        }
    } catch (error) {
        iziToast.error({
            title: 'HTTP Error',
            message: `Failed to fetch images: ${error.message}`,
            position: 'topRight',
        });
        console.error('Error fetching images:', error);
    } finally {
        hideLoader();
        form.reset();
    }
}

form.addEventListener('submit', onFormSubmit);
