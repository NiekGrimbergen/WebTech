class movie {
    constructor(director, writer, actors) {
        this.director = director;
        this.writer = writer;
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

const mattDamon = new actor("Matt Damon", 1970, [
  "Good Will Hunting",
  "Saving Private Ryan",
  "The Talented Mr. Ripley",
  "Ocean's Eleven",
  "The Bourne Identity",
  "The Departed",
  "The Bourne Ultimatum",
  "Invictus",
  "The Martian",
  "Jason Bourne",
  "Manchester by the Sea",
  "Downsizing",
  "Ford v Ferrari"
]);

const ridleyScott = new director("Ridley Scott", 1937, [
  "Alien",
  "Blade Runner",
  "Thelma & Louise",
  "Gladiator",
  "Black Hawk Down",
  "American Gangster",
  "Prometheus",
  "The Martian",
  "Alien: Covenant"
]);

const andyWeir = new writer("Andy Weir", 1972, [
  "Artemis",
  "Project Hail Mary",
  "Zhekas"
]);
