import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const ref = {
    formForInputSearchingParametersForImages: document.querySelector('.input-form'),
    containerForLoaderSign: document.querySelector('.loader-container'),
    formForImagesGallery: document.querySelector('.gallery')
};
function showWarningMessage() {
    iziToast.warning({
        color: 'red',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topCenter',
    });
};
function showErrorMessage(error) {
  iziToast.error({
      timeout: 3000,
      message: `An error: ${error} occurred while processing your request `,
      position: 'topCenter',
    });
}
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
  return fetch(url).then(Response => {
    if (!Response.ok) { throw new Error(Response.statusText); }
    return Response.json();
  });
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
  ref.containerForLoaderSign.classList.remove('hide');
    let searchingTheme = event.target.elements.query.value;
     getImageGallery(searchingTheme).then(data => {
    if (data.hits == 0) {
      ref.containerForLoaderSign.classList.add('hide');
      showWarningMessage();
    }
    else {
      ref.containerForLoaderSign.classList.add('hide');
      renderImageGallery(data.hits);
    }
  }).catch(error => { showErrorMessage(error); })
    ref.formForInputSearchingParametersForImages.reset()
   

};


let lightbox = new SimpleLightbox('.gallery a',
    {
    captionsData: 'alt', captionDelay: 250,
    }
);