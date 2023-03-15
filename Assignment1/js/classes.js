import {dom} from './helper.js';
export { movie, director, writer, actor };

// structured repr of a movie
class movie {
    constructor(title, genre, year, director, writers, actors, poster, trailer, plot) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.director = director;
        this.writers = writers;
        this.actors = actors;
        this.poster = poster;
        this.trailer = trailer;
        this.plot = plot;
    }

    listArtists(artists, tooltip, blockName="list") {
        const list = document.createElement('ul');
        list.className = blockName + '__ul';
        //let's add some artists to our info article
        artists.forEach(artist => {
            const li = dom('li', blockName + '__li', list);
            if (artist.photo) {
                li.appendChild(artist.photoElement());
            }
            li.appendChild(artist.toolTippedName(tooltip));
            artist.attachTooltip(tooltip, li);
        });
        return list;
    }

    trailerLink(textContent){
        const a = document.createElement('a');
        a.href = this.trailer;
        a.textContent = textContent;
        return a;
    }

    posterFigure() {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = this.poster;
        img.alt = `Poster for '${this.title}'`;
        figure.appendChild(img);
        return figure;
    }
}

class artist {
    constructor(name, yearOfBirth, bio) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.bio = bio;
    }

    //return an <u> displaying the name of the actor and displaying the tooltip on hover
    toolTippedName(tooltip) {
        var link = document.createElement('u');
        link.className = 'tool-tipped';
        link.textContent = this.name;
        // Propagation: we want the link specific hover to be triggered before the <li> or other element surrounding the ul
        this.attachTooltip(tooltip, link, true);
        return link;
    }

    // fills the tooltip given with this artists info
    #tooltip(tooltip, hoverElement) {
        tooltip.style.display = "flex";
        // Set the position of the dialog box
        tooltip.style.left = hoverElement.offsetLeft + 'px';
        tooltip.style.top = hoverElement.offsetTop + hoverElement.clientHeight + 30 + 'px';

        tooltip.children[0].textContent = this.name + ` (${this.yearOfBirth})`;
        tooltip.children[1].textContent = this.bio;
    }
    // attaches the tooltip to a specified element
    attachTooltip(tooltip, attachTo, capturing = false) {
        attachTo.addEventListener('mouseenter', (event) => {
            this.#tooltip(tooltip, attachTo);
        }, capturing);
        attachTo.addEventListener('mouseleave', (event) => {
            this.#hideTooltip(tooltip);
        }, capturing);
    }
    // hides tooltip
    #hideTooltip(tooltip) {
        tooltip.style.display = "none";
    }
}
// director extends artist, has the ability to add movies
class director extends artist {
    constructor(name, yearOfBirth, bio="", movies=[]) {
        super(name, yearOfBirth, bio);
        this.movies = movies;
    }
    addMovies(movieList) {
        this.movies += movieList;
    }
}
// writer extends artist, has the ability to add books
class writer extends artist {
    constructor(name, yearOfBirth, bio="", books=[]) {
        super(name, yearOfBirth, bio);
        this.books = books;
    }
    addBooks(booksList) {
        this.books += booksList;
    }
}
// actor extends artists, has a photo for the artist and has the ability to add movies
class actor extends artist {
    constructor(name, yearOfBirth, bio="", movies = [], photo = "./images/anom.png") {
        super(name, yearOfBirth, bio);
        this.movies = movies;
        this.photo = photo;
    }
    addMovies(movieList) {
        this.movies += movieList;
    }
    // !!!moet nog worden aangepast om te voldoen aan accesibility !!!
    photoElement() {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        figure.appendChild(img);
        img.src = this.photo;

        return figure;
    }
}
