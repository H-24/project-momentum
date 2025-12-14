const image = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

const background = image[Math.floor(Math.random() * image.length)];

document.body.style.backgroundImage = `url("image/${background}")`;