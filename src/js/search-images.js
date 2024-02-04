import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const ref = {
    formForInputSearchingParametersForImages: document.querySelector('.input-form'),
    containerForLoaderSign: document.querySelector('.loader-container'),
    formForImagesGallery: document.querySelector('.gallery')
};
function deleteImageGalleryMarkup() {
    ref.formForImagesGallery.innerHTML = '';
};
function getImageGallery(whatAreWeSearching) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '?key=42121047-6dc093e186e55c34fb150394f';
    const SEARCHING_THEME = `&q=${whatAreWeSearching}`;
    const IMAGE_TYPE = '&image-type=photo';
    const ORIENTATION = '&orientation=horizontal';
    const SAFE_SEARCH = '&safesearch=true';
    const url = BASE_URL + API_KEY + SEARCHING_THEME + IMAGE_TYPE + ORIENTATION + SAFE_SEARCH;
   return fetch(url).then(Response=>Response.json());
};

function createImageCardMarkup(images) {
  return images.map(({ webformatURL, largeImageURL, tags,likes, views, comments,downloads }) => {
    return `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
          </a>
        <ul class="image-activity">
          <li class="image-activity-item">
            <h4 class="image-activity-type">Likes</h4>
            <p>${likes}</p>
          </li>
          <li class="image-activity-item">
            <h4 class="image-activity-type">Views</h4>
            <p>${views}</p>
          </li>
          <li class="image-activity-item">
            <h4 class="image-activity-type">Comments</h4>
            <p>${comments}</p>
            <li class="image-activity-item">
            <h4 class="image-activity-type">Downloads</h4>
            <p>${downloads}</p>
          </li>
          </li>
        </ul>
      </li>`
  }).join('');
};
function renderImageGallery(images) {
    const markup = createImageCardMarkup(images);
    ref.formForImagesGallery.innerHTML = markup;
    lightbox.refresh();
}
ref.formForInputSearchingParametersForImages.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    deleteImageGalleryMarkup();
    let searchingTheme = event.target.elements.query.value;
    console.log(searchingTheme);
    getImageGallery(searchingTheme).then(data=>{renderImageGallery(data.hits)})
    ref.formForInputSearchingParametersForImages.reset()
   

};


let lightbox = new SimpleLightbox('.gallery a',
    {
    captionsData: 'alt', captionDelay: 250,
    }
);