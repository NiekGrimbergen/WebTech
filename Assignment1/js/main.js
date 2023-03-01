class movie {
    constructor(director, writers, actors) {
        this.director = director;
        this.writers = writers;
        this.actors = actors;
    }
}

class artist {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
}

class director extends artist {
    constructor(name, yearOfBirth, movies) {
        super(name, yearOfBirth);
        this.movies = movies;
    }
}

class writer extends artist {
    constructor(name, yearOfBirth, books) {
        super(name, yearOfBirth);
        this.books = books;
    }
}

class actor extends artist {
    constructor(name, yearOfBirth, movies) {
        super(name, yearOfBirth);
        this.movies = movies;
    }
}
