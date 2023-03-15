export {dom, clearChildren, image};

//helper function to create dom elements quickly
function dom(type, className, parent, textContent = "") {
    var el = document.createElement(type);
    el.className = className;
    if (textContent) {
        el.textContent = textContent;
    }
    parent.appendChild(el);
    return el;
}

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function image(parent, blockName, image, alt) {
    var fig = dom('figure', blockName + '__figure', parent);
    var img = dom('img', blockName + '__img', fig);
    img.src = image;
    img.alt = alt;
}
