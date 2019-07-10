let btn_prev = document.querySelector('#container .prev');
let btn_next = document.querySelector('#container .next');

let images = document.querySelectorAll('#container .photos img');
let i = 0;
let arrOfArtists = [
    'Adrien Olichon',
    'Zain Ali', 
    'pexels.com',
    'Adrien Olichon', 
];

let artist = document.querySelector('#artist');

btn_prev.onclick = function () {
    images[i].className = '';
    i--;

    if (i < 0) {
        i = images.length - 1;
    };

    images[i].className = 'showed';
    artist.innerHTML = arrOfArtists[i];
}

btn_next.onclick = function () {
    images[i].className = '';
    i++;

    if (i >= images.length) {
        i = 0;
    };

    images[i].className = 'showed';
    artist.innerHTML = arrOfArtists[i];
}
