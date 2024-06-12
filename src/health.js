// main.js

import { preloadedImages } from './imagePreloader.js';

// Access preloaded images by their key
const dogImage = preloadedImages['dog3'];
const catImage = preloadedImages['dog4'];

// Now you can use these image objects as needed
// console.log(dogImage);
// console.log(catImage);

console.log(preloadedImages);

// the fucking objects look like this: <img src="src/images/dog3.png">
// as a dict: {dog3: img, dog4: img, dog5: img}
