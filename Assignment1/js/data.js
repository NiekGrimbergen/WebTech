import { actor, director, writer, movie } from './classes.js';
export { theMartian };



const mattDamon = new actor("Matt Damon",
                                1970,
                                "Matt Damon is an American actor, screenwriter, and producer. He was born on October 8, 1970, in Cambridge, Massachusetts. \
                                Damon attended Harvard University but dropped out before graduating to pursue his acting career. He made his screen debut \
                                in the 1988 film Mystic Pizza but gained international recognition with his breakthrough role in Good Will Hunting, which he \
                                co-wrote with his best friend, Ben Affleck.",
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
mattDamon.addPhoto("./images/matt_damon_info.jpg");
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
jessicaChastain.addPhoto("./images/jessica_chastain_info.jpg");
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
kristenWiig.addPhoto("./images/kristin_wiig_info.jpg");

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

const theMartian = new movie('The Martian', 'science fiction, adventure, and drama', 2015, ridleyScott, [andyWeir], [mattDamon, jessicaChastain, kristenWiig, chiwetelEjiofor,
  kateMara, sebastianStan, michaelPena, mackenzieDavis], './images/poster.jfif', 'https://www.youtube.com/watch?v=ej3ioOneTy8', "'The Martian' is a film that follows astronaut Mark Watney, who becomes stranded on Mars after his team leaves him behind thinking that he was dead. He must use his skills and resourcefulness to survive and find a way to signal back to Earth that he's alive.");
