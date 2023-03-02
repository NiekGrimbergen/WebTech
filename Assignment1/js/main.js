import {mattDamon} from './data.js';




//creates an article with a title
function createArticle(parent, title) {
    var article = document.createElement('article');
    var h1 = document.createElement('h1');

    h1.textContent = 'info';
    h1.className = 'title';
    article.appendChild(h1);
    parent.appendChild(article);
    return article;
}

//creates a section following the template
function newSection(article) {
    var section = document.createElement('section');
    section.className = 'section';
    article.appendChild(section);
    return section;
}

//creates a new section header for a specified section
function newSectionHeader(section, content) {
    var header = document.createElement('h2');
    header.className = 'section__title';
    header.textContent = content;
    section.appendChild(header);
}

function newMovieList(section, movies) {
    var list = document.createElement('ul');
    list.className = 'actor__movies';
    section.appendChild(list);

    for (var i = 0; i < movies.length; i++) {
        let movie = document.createElement('li');
        movie.textContent = movies[i];
        list.appendChild(movie);
    }
}

//creates a section about an actor inside a specified article
function addActor(article, actor) {
    var section = newSection(article);
    newSectionHeader(section, actor.name);
    newMovieList(section, actor.movies);
}

const main = document.querySelector('main');
main.className = 'content';

const info = createArticle(main, 'info');

addActor(info, mattDamon);
