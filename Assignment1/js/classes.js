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
