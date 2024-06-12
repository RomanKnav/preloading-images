// preloadImages.js

// takes array as arg:
function imagePreloader(imageUrls) {
    const preloadedImages = {};

    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;

        const name = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
        preloadedImages[name] = img;    // name: img obj
    });

    return preloadedImages;
}

const imageUrls = [
    'src/images/dog3.png',
    'src/images/dog4.png',
    'src/images/dog5.png'
];

// Preload images
const preloadedImages = imagePreloader(Object.values(imageUrls));

// Optionally, expose the preloaded images if you need to access them directly
export { preloadedImages };
// given this shit, no need to actually use the func elsewhere lmfao.
