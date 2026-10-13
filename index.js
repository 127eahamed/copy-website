let carouselIndex = 0;
const images = document.getElementById("carousel-images").children;
function carouselPrev() {
    if (carouselIndex - 1 < 0) {
        carouselIndex = images.length - 1;
    } else {
        carouselIndex--;
    }
    updateCarousel();
}
function carouselNext() {
    if (carouselIndex + 1 >= images.length) {
        carouselIndex = 0;
    } else {
        carouselIndex++;
    }
    updateCarousel();
}
function updateCarousel() {
    for (const image of images) {
        if (image == null || !(image instanceof HTMLImageElement)) {
            continue;
        }
        image.classList.remove("carousel-current-image");
    }
    if (images[carouselIndex] != null && images[carouselIndex] instanceof HTMLImageElement) {
        images[carouselIndex].classList.add("carousel-current-image");
    }
}
