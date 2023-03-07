import { actor, director, writer } from './classes.js';
export { mattDamon, jessicaChastain, kristenWiig, chiwetelEjiofor,
  kateMara, sebastianStan, michaelPena, mackenzieDavis,
  ridleyScott, andyWeir };

const mattDamon = new actor("Matt Damon",
                                1970,
                                "The actor of your dreams",
                                [
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
mattDamon.addPhoto("./images/kristen_wiig.jfif");
const jessicaChastain = new actor("Jessica Chastain",
                                    1977,
                                    "Actress blabla",
                                    [
                                      "Molly's Game",
                                      "Interstellar",
                                      "The Martian",
                                      "X-Men: Dark Phoenix",
                                      "The 355",
                                      "The Forgiven",
                                      "Take Shelter",
                                      "It: Chapter Two",
                                      "Texas Killing Fields",
                                      "Armageddon Time"
                                    ]);
jessicaChastain.addPhoto("./images/kristen_wiig.jfif");
const kristenWiig = new actor("Kristen Wiig",
                                1973,
                                "blabla",
                                [
                                  "Bridesmaids",
                                  "Wonder Woman 1984",
                                  "Ghostbusters",
                                  "The Secret Life of Walter Mitty",
                                  "The Martian",
                                  "Sausage Party",
                                  "Paul",
                                  "Zoolander 2",
                                  "Anchorman 2: The Legend",
                                  "MacGruber"
                                ]);
kristenWiig.addPhoto("./images/kristen_wiig.jfif");

const chiwetelEjiofor = new actor("Chiwetel Ejiofor", 1977, "",
[
  "12 Years a Slave",
  "The Boy Who Harnassed the Wind",
  "The Man Who Fell to Earth",
  "Infinite",
  "Kinky Boots",
  "Docter Strange in the Multiverse of Madness",
  "The Martian",
  "Doctor Strange",
  "Maleficent 2",
  "The Lion King",
  "Love Actually"
]);

const kateMara = new actor("Kate Mara", 1983, "",
[
  "A Teacher",
  "Shooter",
  "The Fantastic Four 2",
  "House of Cards",
  "Mercy",
  "The Martian",
  "Zoom",
  "American Horror Story",
  "Iron Man 2",
  "127 Hours",
  "Iron Clad",
  "Pose",
  "Captive"
])

const sebastianStan = new actor("Sebastian Stan", 1982, "",
[
  "Captain America: The Winter Soldier",
  "Pam & Tommy",
  "Fresh",
  "Captain America: The First Avenger",
  "Gossip Girl",
  "Captain America: Civil War",
  "The 355",
  "Monday",
  "The Martian",
  "The Covenant",
  "Avengers: Endgame",
  "Captain America: New World Order",
  "Avengers: Infinity War",
  "Black Widow"
])

const michaelPena = new actor("Michael Peña", 1976, "",
[
  "End of Watch",
  "CHiPs",
  "Narcos: Mexico",
  "Fury",
  "Shooter",
  "Fantasy Island",
  "Dora and the Lost City of Gold",
  "Extinction",
  "Tom Clancy's Jack Ryan",
  "Ant-Man and the Wasp",
  "Ant-Man",
  "The Martian",
  "12 Strong",
  "Moonfall"
])

const mackenzieDavis = new actor("Mackenzie Davies", 1987, "",
[
  "Terminator: Dark Fate",
  "Happiest Season",
  "The Turning",
  "Blade Runner 2049",
  "Tully",
  "The Martian",
  "That Awkward Moment",
  "Kitchen Sink",
  "Irresistable",
  "What If",
  "Always Shine",
  "Breathe In",
  "Alpha Gang",
  "Izzy Gets The F*ck Across Town"
])

const ridleyScott = new director("Ridley Scott", 1937, "", [
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

const andyWeir = new writer("Andy Weir", 1972, "", [
  "Artemis",
  "Project Hail Mary",
  "Zhekas"
]);
