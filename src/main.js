import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from './js/render-functions';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');
const galleryContainer = document.querySelector('.gallery');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;
const perPage = 15;

iziToast.settings({
    position: 'topRight',
    timeout: 4000,
    progressBar: false,
});

function smoothScroll() {
    const firstGalleryItem = galleryContainer.firstElementChild;
    if (firstGalleryItem) {
        const cardHeight = firstGalleryItem.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });
    }
}

async function fetchImages(isNewSearch = true) {
    if (isNewSearch) {
        currentPage = 1;
        clearGallery();
        hideLoadMoreButton();
    }

    showLoader();
    hideLoadMoreButton();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        const images = data.hits;
        totalHits = data.totalHits;
        const totalPages = Math.ceil(totalHits / perPage);

        if (images.length === 0 && isNewSearch) {
            iziToast.error({
                title: 'No result',
                message: 'Sorry, there are no images matching your search query. Please, try again!',
            });
            return;
        }

        if (isNewSearch && totalHits > 0) {
            iziToast.success({
                message: `We found ${totalHits} images.`,
            });
        }

        createGallery(images);


        if (!isNewSearch) {
            smoothScroll();
        }

        currentPage += 1;

        if (currentPage <= totalPages) {
            showLoadMoreButton();
            } else {
            hideLoadMoreButton();
            if (totalHits > 0) {
                iziToast.info({
                    message: 'We are sorry, but you have reached the end of search results.',
                });
            }
            }
        } catch (error) {
            iziToast.error({
                title: 'HTTP Error',
                message: `Failed to fetch images: ${error.message}`,
            });
    } finally {
        hideLoader();
    }
}


form.addEventListener('submit', async event => {
    event.preventDefault();

    const newQuery = searchInput.value.trim();

    if (newQuery === '') {
        iziToast.error({
            message: 'Please enter a search query!',
        });
        return;
    }

    currentQuery = newQuery;
    await fetchImages(true);

    form.reset();
});

loadMoreBtn.addEventListener('click', async() => {
    await fetchImages(false);
});
