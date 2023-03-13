export { movie, director, writer, actor };

class movie {
    constructor(director, writer, actors) {
        this.director = director;
        this.writer = writer;
        this.actors = actors;
    }
}

class artist {
    constructor(name, yearOfBirth, bio) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.bio = bio;
        this.photo = "./images/anom.png";
    }
    addPhoto(url) {
        this.photo = url;
    }

    #newElement(type, className, parent, textContent = "") {
        var el = document.createElement(type);
        el.className = className;
        if (textContent) {
            el.textContent = textContent;
        }
        parent.appendChild(el);
        return el;
    }

    #photo(section, photo, alt) {
        var fig = this.#newElement('figure', 'artist__figure', section);
        var img = this.#newElement('img', 'artist__img', fig);
        img.src = photo;
        img.alt = alt;
    }

    #subSection(parent, title, textContent) {
        this.#newElement('h3', 'artist__h3', parent, title);
        this.#newElement('p', 'artist__paragraph', parent, textContent);
    }

    #tooltip(tooltip, hoverElement) {
        tooltip.style.display = "flex";
        // Set the position of the dialog box
        tooltip.style.left = hoverElement.offsetLeft + 'px';
        tooltip.style.top = hoverElement.offsetTop + hoverElement.clientHeight + 10 + 'px';

        tooltip.children[0].textContent = this.name;
        tooltip.children[1].textContent = this.bio;
    }

    #attachTooltip(tooltip, attachTo) {
        attachTo.addEventListener('mouseenter', (event) => {
            this.#tooltip(tooltip, attachTo);
        });
        attachTo.addEventListener('mouseleave', (event) => {
            this.#hideTooltip(tooltip);
        });
    }

    #hideTooltip(tooltip) {
        tooltip.style.display = "none";
    }
    //creates a section about an artist inside a specified article
    section(parent, tooltip) {
        var section = this.#newElement('section', 'artist', parent);
        var header = this.#newElement('h2', 'artist__header', section, this.name);

        this.#attachTooltip(tooltip, header)

        this.#photo(section, this.photo, this.name);
        var wrapper = this.#newElement('section', 'artist__wrapper', section);
        //some artists have movies, some have books, let's add them
        if (this.movies) {
            this.#subSection(wrapper, 'Movies', this.movies.join(', '));
        }
        if (this.books) {
            this.#subSection(wrapper, 'Books', this.books.join(', '));
        }
        this.#subSection(wrapper, 'Bio', "Born in " + this.yearOfBirth + ". " + this.bio, this.bio);
    }

}

class director extends artist {
    constructor(name, yearOfBirth, bio="", movies=[]) {
        super(name, yearOfBirth, bio);
        this.movies = movies;
    }
}

class writer extends artist {
    constructor(name, yearOfBirth, bio="", books=[]) {
        super(name, yearOfBirth, bio);
        this.books = books;
    }
}

class actor extends artist {
    constructor(name, yearOfBirth, bio="", movies=[]) {
        super(name, yearOfBirth, bio);
        this.movies = movies;
    }
}
