export {dom, clearChildren, imageFigure};

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

function imageFigure(parent, blockName, image, alt) {
    const fig = dom('figure', blockName, parent);
    const img = dom('img', `${blockName}__img`, fig);
    img.src = image;
    img.alt = alt;
    return fig;
  }
  