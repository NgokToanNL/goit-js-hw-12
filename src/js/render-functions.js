import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `
    <li class= "gallery-item">
        <a class= "gallery-link" href= "${largeImageURL}">
            <img class= "gallery-image"
                src= "${webformatURL}"
                alt= "${tags}"
                title= "${tags}"
            />
        </a>
        <div class= "image-details">
            <div class= "details-item">
                <span class= "detail-label">Likes</span>
                <span class= "detail-value">${likes}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Views</span>
                <span class= "detail-value">${views}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Comments</span>
                <span class= "detail-value">${comments}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Downloads</span>
                <span class= "detail-value">${downloads}</span>
            </div>
        </div>
    </li> `;
}

export function createGallery(images) {
    if (!images || images.length === 0) {
        return;
    }

    const markup = images.map(createImageCard).join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    loader.classList.add('is-hidden');
}