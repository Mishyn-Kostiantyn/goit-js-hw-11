import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as m}from"./assets/vendor-874053e3.js";const r={formForInputSearchingParametersForImages:document.querySelector(".input-form"),containerForLoaderSign:document.querySelector(".loader-container"),formForImagesGallery:document.querySelector(".gallery")};function g(){r.formForImagesGallery.innerHTML=""}function y(e){const a="https://pixabay.com/api/",t="?key=42121047-6dc093e186e55c34fb150394f",i=`&q=${e}`,l="&image-type=photo",o="&orientation=horizontal",s="&safesearch=true",n=a+t+i+l+o+s;return fetch(n).then(c=>c.json())}function p(e){return e.map(({webformatURL:a,largeImageURL:t,tags:i,likes:l,views:o,comments:s,downloads:n})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${i}"
          />
          </a>
        <ul class="image-activity">
          <li class="image-activity-item">
            <h4 class="image-activity-type">Likes</h4>
            <p>${l}</p>
          </li>
          <li class="image-activity-item">
            <h4 class="image-activity-type">Views</h4>
            <p>${o}</p>
          </li>
          <li class="image-activity-item">
            <h4 class="image-activity-type">Comments</h4>
            <p>${s}</p>
            <li class="image-activity-item">
            <h4 class="image-activity-type">Downloads</h4>
            <p>${n}</p>
          </li>
          </li>
        </ul>
      </li>`).join("")}function u(e){const a=p(e);r.formForImagesGallery.innerHTML=a,f.refresh()}r.formForInputSearchingParametersForImages.addEventListener("submit",h);function h(e){e.preventDefault(),g();let a=e.target.elements.query.value;console.log(a),y(a).then(t=>{u(t.hits)}),r.formForInputSearchingParametersForImages.reset()}let f=new m(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers4.js.map
