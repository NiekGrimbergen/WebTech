import * as artists from './data.js';

//creates an article with a title
function newArticle(parent, title) {
    var article = document.createElement('article');
    article.id = title;
    parent.appendChild(article);
    return article;
}



function hide(element) {
    element.style.display = "none";
}

function createTooltip() {
    const tooltip = document.createElement('div');
    tooltip.style.display = 'none';
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    const tooltipTitle = document.createElement('h3');
    tooltipTitle.className = 'tooltip__title';
    tooltip.appendChild(tooltipTitle);

    const tooltipText = document.createElement('p');
    tooltipText.className = 'tooltip__text';
    tooltip.appendChild(tooltipText);

    return tooltip;
}


function setupPage() {
    //set the classname of main to content for our css
    const main = document.querySelector('main');
    main.className = 'content';

    //the assignment requires to build articles with js:
    const info = newArticle(main, 'info');

    const tooltip = createTooltip();

    //let's add some artists to our info article
    Object.keys(artists).forEach(function(key) {
        artists[key].section(info, tooltip);
    });

    setupStyleMenu();
}

function setupStyleMenu() {
    var stylingSelector = document.getElementById("styling-select");
    window.addEventListener('load', updateSelectors);
    stylingSelector.addEventListener('change', updateSelectors);

    var valueSelector = document.getElementById("value-select");
    valueSelector.addEventListener('change', updateStyle);
}

//updates the menu for the value selector, cuz if we want to change fontsize we have different values
function updateSelectors() {
    var stylingSelector = document.getElementById("styling-select");
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
    //clear children to make room for other options
    while (valueSelector.firstChild) {
        valueSelector.removeChild(valueSelector.firstChild);
    }
    values.forEach(val => {
        let option = document.createElement('option');
        option.value = val;
        option.textContent = val;
        valueSelector.appendChild(option);
    })
}

//update the style of all elements using the menu
function updateStyle() {
    var elementSelector = document.getElementById("element-select");
    var stylingSelector = document.getElementById("styling-select");
    var valueSelector = document.getElementById("value-select");

    var elements = document.querySelectorAll(elementSelector.value);

    elements.forEach(element => {
        switch (stylingSelector.value) {
            case 'font-size':
                    element.style.fontSize = valueSelector.value + 'px';
                break;
            case 'background-color':
                    element.style.backgroundColor = valueSelector.value;
                break;
        }
    });
}

window.addEventListener('load', setupPage());
