import {mattDamon, jessicaChastain, kristenWiig, chiwetelEjiofor,
    kateMara, sebastianStan, michaelPena, mackenzieDavis,
    ridleyScott, andyWeir} from './data.js';

//creates an article with a title
function newArticle(parent, title) {
    var article = document.createElement('article');
    article.id = title;
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
    section.classList.add('artist');
    article.appendChild(section);
    return section;
}

//creates a new section header for a specified section
function sectionHeader(section, content) {
    var header = document.createElement('h2');
    header.className = 'artist__name';
    header.textContent = content;
    section.appendChild(header);
}

// creates an figure with img with alt attribute, which is the name of the artist
function artistPhoto(section, photo, alt) {
    var fig = document.createElement('figure');
    fig.className = 'artist__figure';
    section.appendChild(fig);

    var img = document.createElement('img');
    img.className = 'artist__img';
    img.src = photo;
    img.alt = alt;
    fig.appendChild(img);
}

function ArtistParTitle(section, text) {
    var title = document.createElement('h3');
    title.className = 'artist__h3';
    title.textContent = text + ":";
    section.appendChild(title);
}

function ArtistPar(section, text) {
    var par = document.createElement('p');
    par.textContent = text;
    section.appendChild(par);
}

function artistSubsection(section, title, content) {
    ArtistParTitle(section, title);
    ArtistPar(section, content);
}

//creates a section about an artist inside a specified article
function newArtistSection(article, artist) {
    var section = newSection(article);
    artistPhoto(section, artist.photo, artist.name);
    sectionHeader(section, artist.name);
    //some artists have movies, some have books, let's add them
    if (artist.movies) {
        artistSubsection(section, "Movies", artist.movies.join(', '));
    }
    if (artist.books) {
        artistSubsection(section, "Books", artist.books.join(', '));
    }
    artistSubsection(section, "Bio", artist.bio);
}

//set the classname of main to content for our css
const main = document.querySelector('main');
main.className = 'content';

//the assignment requires to build articles with js:
const info = newArticle(main, 'info');

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
