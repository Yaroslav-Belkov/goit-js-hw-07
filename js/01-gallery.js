
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElements = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"/>
    </a>
    </div>`
  )
  .join("");

galleryElements.insertAdjacentHTML("beforeend", markup);
galleryElements.addEventListener("click", onImgGalleryClick);

let instance = "";

function onImgGalleryClick(event) {
  event.preventDefault();
  window.addEventListener("keydown", onEscKeyPress);
  instance = basicLightbox.create(
    `<img src="${event.target.parentNode.href}">`
  );
  instance.show();
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onEscKeyPress);
  }
}