import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");

let instance;

const showImages = (imgs) => {
  imgs.forEach((img) => {
    const html = `
    <div class="gallery__item">
      <a class="gallery__link" href="${img.preview}">
        <img
          class="gallery__image"
          src="${img.original}"
          data-source="${img.preview}"
          alt="${img.description}"
        />
      </a>
    </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};
/////////////////////////////////

showImages(galleryItems);

////////////////////////////////
// Events

// Show modal on click
container.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") return;
  e.preventDefault();

  instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);

  instance.show();
});

// Close modal on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && instance.visible()) instance.close();
});
