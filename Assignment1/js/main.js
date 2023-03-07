import {mattDamon, jessicaChastain, kristenWiig, chiwetelEjiofor,
    kateMara, sebastianStan, michaelPena, mackenzieDavis,
    ridleyScott, andyWeir} from './data.js';

function newElement(type, className, parent, textContent = "") {
    var el = document.createElement(type);
    el.className = className;
    if (textContent) {
        el.textContent = textContent;
    }
    parent.appendChild(el);
    return el;
}

//creates an article with a title
function newArticle(parent, title) {
    var article = newElement('article', title, parent);
    article.id = title;
    var h1 = newElement('h1', 'info', article);
    h1.textContent = 'info';
    return article;
}




// creates an figure with img with alt attribute, which is the name of the artist
function artistPhoto(section, photo, alt) {
    var fig = newElement('figure', 'artist__figure', section);
    var img = newElement('img', 'artist__img', fig);
    img.src = photo;
    img.alt = alt;
}

function artistSection(parent, title, textContent) {
    newElement('h3', 'artist__h3', parent, title);
    newElement('p', 'artist__paragraph', parent, textContent);
}

//creates a section about an artist inside a specified article
function newArtistSection(article, artist) {
    var section = newElement('section', 'artist', article);
    var header = newElement('h2', 'artist__header', section, artist.name);
    header.addEventListener('mouseenter', (event) => {
        showDialog(header, artist);
    });
    header.addEventListener('mouseleave', (event) => {
        hideDialog();
    });
    artistPhoto(section, artist.photo, artist.name);
    var wrapper = newElement('div', 'artist__wrapper', section);
    //some artists have movies, some have books, let's add them
    if (artist.movies) {
        artistSection(wrapper, 'Movies', artist.movies.join(', '));
    }
    if (artist.books) {
        artistSection(wrapper, 'Books', artist.books.join(', '));
    }
    artistSection(wrapper, 'Bio', "Born in " + artist.yearOfBirth + ".", artist.bio);
}

function showDialog(hoverElement, artist) {
    tooltip.style.display = "flex";
    // Set the position of the dialog box
    tooltip.style.left = hoverElement.offsetLeft + 'px';
    tooltip.style.top = hoverElement.offsetTop + hoverElement.clientHeight + 10 + 'px';

    tooltipTitle.textContent = artist.name;
    tooltipText.textContent = artist.bio;
}

function hideDialog() {
    tooltip.style.display = "none";
}

//One global tooltip that gets recycled
const tooltip = newElement('div', 'tooltip', document.body);
hideDialog();
const tooltipTitle = newElement('h3', 'tooltip__title', tooltip);
const tooltipText = newElement('p', 'tooltip__text', tooltip);


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
