import { actor, director, writer } from './classes.js';
export { mattDamon, ridleyScott, andyWeir };

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
