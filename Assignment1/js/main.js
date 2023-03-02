import {mattDamon} from './data.js';


const main = document.querySelector('main');
const article = document.createElement('article');
main.className = 'content';
main.appendChild(article);
const h1 = document.createElement('h1');
h1.textContent = 'info';
h1.className = 'title';
article.appendChild(h1);

function addArtist(article, artist) {
    var section = document.createElement('section');
    section.className = 'section';
    article.appendChild(section);

    var header = document.createElement('h2');
    header.className = 'section__title';
    header.textContent = artist.name;
    section.appendChild(header);

    var movies = document.createElement('ul');
    movies.className = 'actor__movies';
    section.appendChild(movies);

    for (var i = 0; i < artist.movies.length; i++) {
        let movie = document.createElement('li');
        movie.textContent = artist.movies[i];
        movies.appendChild(movie);
    }
}

addArtist(article, mattDamon);
