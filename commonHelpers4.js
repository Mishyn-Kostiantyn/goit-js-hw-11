import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as g,i as m}from"./assets/vendor-5b791d57.js";const t={formForInputSearchingParametersForImages:document.querySelector(".input-form"),containerForLoaderSign:document.querySelector(".loader-container"),formForImagesGallery:document.querySelector(".gallery")};function u(){m.warning({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}function h(e){m.error({timeout:3e3,message:`An error: ${e} occurred while processing your request `,position:"topCenter"})}function y(){t.formForImagesGallery.innerHTML=""}function p(e){const a="https://pixabay.com/api/",r="?key=42121047-6dc093e186e55c34fb150394f",i=`&q=${e}`,o="&image-type=photo",s="&orientation=horizontal",n="&safesearch=true",c=a+r+i+o+s+n;return fetch(c).then(l=>{if(!l.ok)throw new Error(l.statusText);return l.json()})}function f(e){return e.map(({webformatURL:a,largeImageURL:r,tags:i,likes:o,views:s,comments:n,downloads:c})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${i}"
          />
          </a>
        <ul class="image-activity">
          <li class="image-activity-item">
            <h4 class="image-activity-type">Likes</h4>
            <p>${o}</p>
          </li>
          <li class="image-activity-item">
            <h4 class="image-activity-type">Views</h4>
            <p>${s}</p>
          </li>
          <li class="image-activity-item">
            <h4 class="image-activity-type">Comments</h4>
            <p>${n}</p>
            <li class="image-activity-item">
            <h4 class="image-activity-type">Downloads</h4>
            <p>${c}</p>
          </li>
          </li>
        </ul>
      </li>`).join("")}function d(e){const a=f(e);t.formForImagesGallery.innerHTML=a,S.refresh()}t.formForInputSearchingParametersForImages.addEventListener("submit",I);function I(e){e.preventDefault(),y(),t.containerForLoaderSign.classList.remove("hide");let a=e.target.elements.query.value;p(a).then(r=>{r.hits==0?(t.containerForLoaderSign.classList.add("hide"),u()):(t.containerForLoaderSign.classList.add("hide"),d(r.hits))}).catch(r=>{h(r)}),t.formForInputSearchingParametersForImages.reset()}let S=new g(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers4.js.map
