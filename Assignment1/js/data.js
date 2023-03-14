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
mattDamon.addPhoto("./images/matt_damon.jfif");
const jessicaChastain = new actor("Jessica Chastain",
                                    1977,
                                    "Jessica Chastain's movies was Born on March 24, 1977, in Sacramento, California, the American actress first appeared on TV in the mid-2000s with roles in 'ER' \
                                    and 'Veronica Mars.' But it was her role in 'The Tree of Life' in 2011 that got her nominated for a Golden Globe for Best Supporting Actress. \
                                    In addition to her acting career, Chastain is a vocal advocate for gender equality and women's rights. She has been involved in several initiatives \
                                    to promote gender diversity in Hollywood and to support women's access to healthcare and education",
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
jessicaChastain.addPhoto("./images/jessica_chastain.jfif");
const kristenWiig = new actor("Kristen Wiig",
                                1973,
                                "Kristen Wiig is an actress and comedian. She was born on August 22, 1973, in Canandaigua, New York. Wiig got her start in the comedy world as \
                                a member of the improvisation group: The Groundlings in Los Angeles. She later joined the cast of the sketch series Saturday Night Live, \
                                where  she became known for her weird and funny characters and impressions",
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

const chiwetelEjiofor = new actor("Chiwetel Ejiofor",
                                1977,
                                "Chiwetel Ejiofor is a British-Nigerian actor, born on July 10, 1977, in London, England. He began his acting career in the early 2000s, \
                                appearing in several stage productions before transitioning to film and television. Ejiofor has received numerous nominations and awards for his acting work, \
                                including an Academy Award nomination for Best Actor for his role in 12 Years a Slave. He is also a director and has directed several short films, \
                                including the award-winning film, Columbite Tantalite.",
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

const kateMara = new actor("Kate Mara",
                                1983, 
                                "Kate Mara is an American actress, born on February 27, 1983, in Bedford, New York. She began her acting career in television, with roles in shows like Law & Order: \
                                Special Victims Unit and 24, before transitioning to film. Mara has since starred in several successful films, including Brokeback Mountain, The Martian, and Megan Leavey. \
                                Mara is also a producer and co-founded the production company, Deadpan Pictures. She is known for her activism work and has been involved in several \
                                initiatives to promote animal rights and combat climate change.",
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

const sebastianStan = new actor("Sebastian Stan",
                                1982,
                                  "Sebastian Stan is a Romanian-American actor known for playing Bucky Barnes/Winter Soldier in the Marvel Cinematic Universe. \
                                  He is also a producer and a philanthropist who supports mental health awareness and combats hunger.",
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

const michaelPena = new actor("Michael Peña", 
                                1976, 
                                "Michael Peña is a Mexican-American actor born on January 13, 1976, in Chicago, Illinois. He began his acting career in the late 1990s \
                                and has since appeared in numerous films, including Crash, Ant-Man, and The Martian. Peña has received critical acclaim for his performances, \
                                earning nominations for several awards, including a Primetime Emmy Award for his role in the television series, Narcos: Mexico.",
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

const mackenzieDavis = new actor("Mackenzie Davies", 
                                1987, 
                                "Mackenzie Davis is a Canadian actress, born on April 1, 1987, in Vancouver, British Columbia. She began her acting career in 2012 \
                                with a supporting role in the film Smashed. She gained wider recognition for her role as Cameron Howe in the television series Halt \
                                and Catch Fire and has since starred in several successful films, including Blade Runner 2049, Tully, and Terminator: Dark Fate.",
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

const ridleyScott = new director("Ridley Scott", 
                                1937, 
                                "Ridley Scott is an English film director and producer, born on November 30, 1937, in South Shields, England. \
                                He began his career in advertising before transitioning to film and television in the 1970s. Scott is best known for his work on several successful films, \
                                including Alien, Blade Runner, and Gladiator, and has received numerous nominations and awards for his directing and producing work, including several Academy Award nominations", [
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

const andyWeir = new writer("Andy Weir", 
                                1972, 
                                "Andy Weir is an American novelist, born on June 16, 1972, in Davis, California. He is best known for his debut novel, The Martian, \
                                which was later adapted into a successful film. Weir has since published several other novels, including Artemis and Project Hail Mary, \
                                and has been recognized for his contribution to science fiction literature, earning nominations for several prestigious awards, including the Hugo Award.", [
                                  "Artemis",
                                  "Project Hail Mary",
                                  "Zhekas"
                                ]);

const theMartian = new movie('The Martian', 'science fiction, adventure, and drama', 2015, ridleyScott, [andyWeir], [mattDamon, jessicaChastain, kristenWiig, chiwetelEjiofor,
  kateMara, sebastianStan, michaelPena, mackenzieDavis], './images/poster.jfif', 'https://www.youtube.com/watch?v=ej3ioOneTy8', "'The Martian' is a film that follows astronaut Mark Watney, who becomes stranded on Mars after his team leaves him behind thinking that he was dead. He must use his skills and resourcefulness to survive and find a way to signal back to Earth that he's alive.");
