console.log('Run this site on http server (like lite-server), for the imports to work');
import {theMartian} from './data.js';
import {dom, clearChildren, imageFigure} from './helper.js';


//loads the rest of the script: it all starts here
window.addEventListener('load', setupPage());

// kindof main function
function setupPage() {
    //Constructs all the elements that are shared with other pages, but now with dom manipulation
    constructHeader();
    if (window.location.pathname == '/info.html') {
        // Pass the imported movie object in (could have been any movie, structured like ours)
        constructInfo(theMartian);
    }
    constructFooter();
}

function constructHeader() {
    const header = document.querySelector('header');

    const fig = imageFigure(header, 'logo-container', './images/logo.png', "Logo reading &quot;The Martian&quot;");
    const img = fig.querySelector('img');
    img.classList.add('logo-container__logo');
    const nav = dom('nav', 'navbar', header);

    const menuPairs = [
        ['Home', 'index.html'],
        ['Synopsis', 'summary.html'],
        ['Ratings', 'ratings.html'],
        ['Cast', 'cast.html'],
        ['Info', 'info.html'],
        ['Contact', 'contact.html']
    ]

    const list = dom('ul', 'navbar__list', nav)

    for (const pair of menuPairs) {
        let li = dom('li', 'navbar__item', list);
        let link = dom('a', 'navbar__link', li, pair[0]);
        link.href = pair[1];
    }
}

function constructInfo(movie) {
    //set the classname of main to content for our css
    const main = document.querySelector('main');
    main.className = 'content';

    // Create article object inside main
    const info = dom('article', 'article', main);
    // Create banner as on other pages
    bannerAndTitle(info);
    // Create a 'general' tooltip that we can reuse (quicker than creating and destroying one every time)
    const tooltip = createTooltip();

    // Our content listed as ['Title of the section', 'content']
    const sectionContentPairs = [
        ['Title', movie.title],
        ['Genre', movie.genre],
        ['Plot', movie.plot],
        ['Poster', movie.posterFigure()],
        ['Stars', movie.listArtists(movie.actors, tooltip, 'actor')],
        ['Writers', movie.listArtists(movie.writers, tooltip, 'writer')],
        ['Director', movie.director.toolTippedName(tooltip)],
        ['Trailer', movie.trailerLink('Click here to watch the trailer')],
    ]
    // Creates all sections with correct formatted content
    sectionsFromPairs(sectionContentPairs, info);
}

function bannerAndTitle(parent) {
    const banner = imageFigure(parent, 'banner', './images/banner.jpg', 'Banner for the movie the Martian');
    const title = dom('h1', 'title title--white', parent, 'Info');
}
// Creates a section inside parent with an h2 title containing a specified Node
function section(parent, title, contentNode) {
    const section = dom('section', 'section', parent);
    const header = dom('h2', 'section__title', section, title);
    section.appendChild(contentNode);
    return section;
}
// Creates sections within a parent based on 'title-content' pairs
function sectionsFromPairs(sectionContentPairs, parent) {
    for (const pair of sectionContentPairs) {
        // Element is a node element we just want to append that to our new section
        let element = pair[1];
        // In case it's just a string: let's make a paragraph to append to our new section
        if (typeof pair[1] == 'string') {
            const par = document.createElement('p');
            par.textContent = pair[1];
            element = par;
        }
        //In case of an <u> (like tooltipped names) we also just want to put that inside a paragraph rather than appending as u
        else if (pair[1].tagName == 'U') {
            const par = document.createElement('p');
            par.appendChild(pair[1]);
            element = par;
        }
        // Creates the section with correct element attached
        section(parent, pair[0], element);
    }
}

function constructFooter() {
    const footer = document.querySelector('footer');

    const section = dom('section', 'section section--dark section--top-rounded movie-links', footer);
    const h2 = dom('h2', 'section__title', section, 'Stay Connected');
    const p = dom('p', 'subtitle', section, "Follow 'The Martian' on Social Media and Visit the Official Website:");
    const div = dom('div', 'movie-links__block', section);

    const linkPairs = [
        ['https://www.foxmovies.com/movies/the-martian', 'images/www_icon.svg', 'A picture of the icon of a website'],
        ['https://twitter.com/MartianMovie', 'images/tw_icon.svg', 'A picture of the icon of Wwitter'],
        ['https://www.facebook.com/MartianMovie/', 'images/fb_icon.svg', 'A picture of the icon of a Facebook'],
        ['https://www.instagram.com/martianmovie/', 'images/in_icon.svg', 'A picture of the icon of Instagram'],
        ['https://www.youtube.com/user/foxmovies', 'images/yt_icon.svg', 'A picture of the icon of Youtube']
    ];

    linkPairs.forEach(pair => {
        const link = dom('a', 'movie-links__link', div);
        link.href = pair[0];
        const img = dom('img', 'movie-links__img', link);
        img.src = pair[1];
        img.alt = pair[2];
    });

    // What can the user choose to style?

    let stylableElements = ['body', 'header', 'footer', 'article', 'section'];
    let stylableProps = ['font-size', 'background-color'];

    let addSelector = (name, list) => {
        const label = document.createElement('label');
        label.setAttribute('for', name + '-select');
        label.textContent = 'Which ' + name + '?';

        const selector = document.createElement('select');
        selector.name = name;
        selector.id = name + '-select';

        list.forEach(element => {
            let option = document.createElement('option');
            option.value = element;
            option.textContent = element;
            selector.appendChild(option);
        });
        footer.appendChild(label);
        footer.appendChild(selector);
    };

    addSelector('element', stylableElements);
    addSelector('property', stylableProps);
    addSelector('value', []);
    setupStyleMenu();
}


// Creates a div inside the body that functions as tooltip/dialog and hides it
function createTooltip() {
    const tooltip = dom('div', 'tooltip', document.body);
    tooltip.style.display = 'none';

    const tooltipTitle = dom('h3', 'tooltip__title', tooltip);
    const tooltipText = dom('p', 'tooltip__text', tooltip);
    return tooltip;
}


// Loads the styling menu in the footer
function setupStyleMenu() {
    const stylingSelector = document.getElementById("property-select");
    window.addEventListener('load', updateSelectors);
    stylingSelector.addEventListener('change', updateSelectors);

    var valueSelector = document.getElementById("value-select");
    valueSelector.addEventListener('change', updateStyle);
}


//updates the menu for the value selector, cuz if we want to change fontsize we have different values
function updateSelectors() {
    const stylingSelector = document.getElementById("property-select");
    var values = [];
    // Sets the values for inside the third selector
    switch (stylingSelector.value) {
        case 'font-size':
            values = [10,16,20,24,36,48];
            break;
        case 'background-color':
            values = ["red", "green", "blue"];
            break;
    }
    const valueSelector = document.getElementById("value-select");
    // Removes existing values so that the list doesnt grow with values that are not possible
    clearChildren(valueSelector);
    // Add all options to the <select>
    values.forEach(val => {
        let option = dom('option', 'selector__option', valueSelector, val);
        option.textContent = val;
    });
}

//update the style of all elements using the menu
function updateStyle() {
    const elementSelector = document.getElementById("element-select");
    const stylingSelector = document.getElementById("property-select");
    const valueSelector = document.getElementById("value-select");
    // Get all elements that are selected with the menu
    const elements = document.querySelectorAll(elementSelector.value);
    // Set style for specified element by the specified value
    switch (stylingSelector.value) {
        case 'font-size':
            elements.forEach(element => {
                element.style.fontSize = valueSelector.value + 'px';
            });

            break;
        case 'background-color':
            elements.forEach(element => {
                element.style.backgroundColor = valueSelector.value;
            });
            break;
    }

}
