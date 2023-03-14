import {dom} from './helper.js';
export { movie, director, writer, actor };


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
            let li = dom('li', blockName + '__li', list);
            li.appendChild(artist.toolTippedName(tooltip));
        });
        return list;
    }

    trailerLink(textContent){
        const a = document.createElement('a');
        a.href = this.trailer;
        a.textContent = textContent;
        return a;
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
    //return an <a> displaying the name of the actor and displaying the tooltip on hover
    toolTippedName(tooltip) {
        var link = document.createElement('a');
        link.className = 'tool-tipped';
        link.textContent = this.name;
        link.href = 'cast.html'; //actually a placeholder but is fine for the moment
        this.attachTooltip(tooltip, link);
        return link;
    }

    // fills the tooltip given with this artists info
    #tooltip(tooltip, hoverElement) {
        tooltip.style.display = "flex";
        // Set the position of the dialog box
        tooltip.style.left = hoverElement.offsetLeft + 'px';
        tooltip.style.top = hoverElement.offsetTop + hoverElement.clientHeight + 30 + 'px';

        tooltip.children[0].textContent = this.name;
        tooltip.children[1].textContent = this.bio;
    }
    // attaches the tooltip to a specified element
    attachTooltip(tooltip, attachTo) {
        attachTo.addEventListener('mouseenter', (event) => {
            this.#tooltip(tooltip, attachTo);
        });
        attachTo.addEventListener('mouseleave', (event) => {
            this.#hideTooltip(tooltip);
        });
    }
    // hides tooltip
    #hideTooltip(tooltip) {
        tooltip.style.display = "none";
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
