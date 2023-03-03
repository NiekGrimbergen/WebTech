import {mattDamon, jessicaChastain, kristenWiig, chiwetelEjiofor,
    kateMara, sebastianStan, michaelPena, mackenzieDavis,
    ridleyScott, andyWeir} from './data.js';

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

//creates a <ul> containing an artists work
function newTitlesList(section, titles, type) {
    //add a header to the list
    var typeOfWork = document.createElement('h3');
    typeOfWork.textContent = type + ":";
    section.appendChild(typeOfWork);
    //create the list itself
    var list = document.createElement('ul');
    list.className = 'actor__movies';
    section.appendChild(list);
    //add the titles to the ul as li's
    for (var i = 0; i < titles.length; i++) {
        let movie = document.createElement('li');
        movie.textContent = titles[i];
        list.appendChild(movie);
    }
}

function actorPhoto(section, photo){
    var img = document.createElement('img');
    img.src = photo;
    section.appendChild(img);
}

//creates a section about an artist inside a specified article
function newArtistSection(article, artist) {
    var section = newSection(article);
    newSectionHeader(section, artist.name);
    //some artists have movies, some have books, let's add them
    if (artist.photo){
        actorPhoto(section, artist.photo);
    }
    if (artist.movies) {
        newTitlesList(section, artist.movies, "Movies");
    }
    if (artist.books) {
        newTitlesList(section, artist.books, "Books");
    }
}

//set the classname of main to content for our css
const main = document.querySelector('main');
main.className = 'content';

//the assignment requires to build articles with js:
const info = createArticle(main, 'info');

//let's add some artists to our info article
newArtistSection(info, mattDamon);
newArtistSection(info, jessicaChastain);
newArtistSection(info, kristenWiig);
newArtistSection(info, chiwetelEjiofor);
newArtistSection(info, kateMara);
newArtistSection(info, sebastianStan);
newArtistSection(info, michaelPena);
newArtistSection(info, mackenzieDavis);
newArtistSection(info, ridleyScott);
newArtistSection(info, andyWeir);
