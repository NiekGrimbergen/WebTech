import {theMartian} from './data.js';
import {dom, clearChildren, image} from './helper.js';

//loads the rest of the script: it all starts here
window.addEventListener('load', setupPage());

// kindof main function
function setupPage() {
    //Constructs all the elements that are shared with other pages, but now with dom manipulation
    constructHeader();
    if (window.location.pathname == '/info.html') {
        constructInfo();
    }
    constructFooter();
}

function constructHeader() {
    const header = document.querySelector('header');
    const fig = dom('figure', 'logo-container', header);
    const img = dom('img', 'logo-container__logo', fig);
    img.src = './images/logo.png';
    img.alt = "Logo reading &quot;The Martian&quot;";
    const nav = dom('nav', 'navbar', header);

    let menuPairs = [
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

function constructInfo() {
    //set the classname of main to content for our css
    const main = document.querySelector('main');
    main.className = 'content';

    const info = dom('article', 'article', main);
    const banner = dom('figure', 'banner', info);
    const bannerImg = dom('img', 'banner__img', banner);
    bannerImg.src = './images/banner.jpg';
    const title = dom('h1', 'title title--white', info, 'Info');
    //the assignment requires to build articles with js:
    const tooltip = createTooltip();

    let section = (title, contentNode) => {
        const sect = dom('section', 'section', info);
        const header = dom('h2', 'section__title', sect, title);
        sect.appendChild(contentNode);
        return sect;
    }

    const titlePar = document.createElement('p');
    titlePar.textContent = theMartian.title;
    section('Title', titlePar);
    //!!!!! moet accesible !!!!!!!!!!!
    const posterFig = document.createElement('figure');
    const posterImg = document.createElement('img');
    posterImg.src = theMartian.poster;
    posterFig.appendChild(posterImg);
    section('Poster', posterFig);

    const genrePar = document.createElement('p');
    genrePar.textContent = theMartian.genre;
    section('Genre', genrePar);

    const plotPar = document.createElement('p');
    plotPar.textContent = theMartian.plot;
    section('Plot', plotPar);


    section('Stars', theMartian.listArtists(theMartian.actors, tooltip, 'actor'));
    section('Writers', theMartian.listArtists(theMartian.writers, tooltip, 'writer'));


    const direcPar = document.createElement('p');
    direcPar.appendChild(theMartian.director.toolTippedName(tooltip));
    section('Director', direcPar);

    const trailerPar = document.createElement('p');
    const a = theMartian.trailerLink('Click here to watch the trailer');
    trailerPar.appendChild(a);
    section('Trailer', trailerPar);

}

function constructFooter() {
    const footer = document.querySelector('footer');

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
    // adds event listeners and logic to the <select>-tags in the footer
    setupStyleMenu();
}


function createTooltip() {
    const tooltip = dom('div', 'tooltip', document.body);
    tooltip.style.display = 'none';

    const tooltipTitle = dom('h3', 'tooltip__title', tooltip);
    const tooltipText = dom('p', 'tooltip__text', tooltip);
    return tooltip;
}



function setupStyleMenu() {
    var stylingSelector = document.getElementById("property-select");
    window.addEventListener('load', updateSelectors);
    stylingSelector.addEventListener('change', updateSelectors);

    var valueSelector = document.getElementById("value-select");
    valueSelector.addEventListener('change', updateStyle);
}


//updates the menu for the value selector, cuz if we want to change fontsize we have different values
function updateSelectors() {
    var stylingSelector = document.getElementById("property-select");
    var values = [];
    switch (stylingSelector.value) {
        case 'font-size':
            values = [10,16,20,24,36,48];
            break;
        case 'background-color':
            values = ["red", "green", "blue"];
            break;
    }
    var valueSelector = document.getElementById("value-select");
    clearChildren(valueSelector);
    // Add all options to the <select>
    values.forEach(val => {
        let option = dom('option', 'selector__option', valueSelector, val);
        option.textContent = val;
    });
}

//update the style of all elements using the menu
function updateStyle() {
    var elementSelector = document.getElementById("element-select");
    var stylingSelector = document.getElementById("property-select");
    var valueSelector = document.getElementById("value-select");

    var elements = document.querySelectorAll(elementSelector.value);

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
