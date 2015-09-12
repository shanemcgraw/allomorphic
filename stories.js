var stories = [
    {
        title: "The Last Question",
        author: "Isaac Asimov",
        dateWritten: 1956,
        genre:["scifi","adventure","cerebral", "famous"],
        link:"http://www.physics.princeton.edu/ph115/LQ.pdf",
        plot : "The story deals with the development of universe-scale computers called Multivacs and their relationships with humanity through the courses of seven historic settings, beginning in 2061."
    },
    {
        title: "The Celebrated Jumping Frog of Calaveras County",
        author: "Mark Twain",
        dateWritten: 1865,
        genre: ["famous","colorful"],
        link:"http://twain.lib.virginia.edu/projects/price/frog.htm",
        plot: "This colorful tale about a man and his famous jumping frog earned Twain fame and acclaim and is well worth a read."
    },
    {
        title: "Three Questions",
        author: "Leo Tolstoy",
        dateWritten: 1885,
        link:"http://www.fa.org/uploaded/US_Attachments/SR9Questions.pdf",
        genre: ["famous","adventure"],
        plot : "While Tolstoy may be better known for his epic novels, this short story in the form of a parable about a king searching for the most important questions in life shows he mastered the medium of the short story as well."
    },
    {
        title: "The Rocking-Horse Winner",
        author: "D.H. Lawrence",
        dateWritten: 1926,
        link:"http://www.classicshorts.com/stories/rockwinr.html",
        genre : ["dark","shocking"],
        plot:"This twisted tale will stick with you long after you’ve read it, documenting the strange relationship between a spendthrift mother and her son, who only longs to make her happy."
    },
    {
        title: "A Good Man Is Hard to Find",
        link:"http://pegasus.cc.ucf.edu/~surette/goodman.html",
        author: "Flannery O'Connor",
        dateWritten: 1953,
        genre : ["dark","shocking"],
        plot:"A manipulative grandmother is at the center of this tragic and shocking story about coming to terms with who you really are."
    },
    {
        title: "The Snows of Kilimanjaro",
        author: "Ernest Hemingway",
        link:"http://xroads.virginia.edu/~drbr/heming.html",
        dateWritten: 1936,
        genre : ["dark","shocking"],
        plot:"A writer on safari in Africa is close to death and looks back on his life regrettably in this short tale."
    },
    {
        title: "The Lame Shall Enter First",
        author: "Flannery O'Connor",
        dateWritten: 1965,
        genre : ["dark","shocking"],
        plot: "In this tragic story, a man’s idealism and self-interest cause him to ignore the needs of his grieving son– with sad consequences."
    },
    {
        title: "The Necklace",
        author: "Guy de Maupassant",
        link:"http://photos.state.gov/libraries/hochiminh/646441/vantt/The%20necklace.pdf",
        dateWritten: 1884,
        plot : "Popular for its shock and the inspiration for many other writers, this short story is a must-read for anyone interested in the genre.",
        genre:["twist","drama"]
    },
    {
        title: "The Lottery",
        author: "Shirley Jackson",
        dateWritten: 1948,
        link:"https://sites.middlebury.edu/individualandthesociety/files/2010/09/jackson_lottery.pdf",
        genre: ["dark","drama","famous"],
        plot: "First published in 1948, this short has been ranked as one of the most famous short stories in American literature– despite its negative reception in some places."
    },
    {
        title: "The Cask of Amontillado",
        author: "Edgar Allan Poe",
        dateWritten: 1846,
        link:"http://www.ibiblio.org/ebooks/Poe/Amontillado.pdf",
        plot:"The story is set in an unnamed Italian city at carnival time in an unspecified year, and is about a man taking fatal revenge on a friend who has insulted him.",
        genre:["dark","horror"]
    },
    {
        title : "Man from the South", 
        author : "Roald Dahl",
        dateWritten: 1948,
        link:"https://maggiemcneill.files.wordpress.com/2013/03/man-from-the-south.pdf",
        genre : ["fantasy","dark","twist"],
        plot : "In this short story, a mysterious man offers a bargain for lighting a lighter on the first try. Win, you get a new car. Lose, he gets to take your finger."
    },
    {   
        title : "Pastoralia", 
        author : "George Saunders", 
        plot : "Winning Saunders an O. Henry Award in 2001, this story focuses on a man who is stuck in a life he hates in a dystopian future.",
        dateWritten : 2000,
        genre : ["scifi","satire","drama"]
    },
    {
        title: "The Monkey's Paw",
        author: "W. W. Jacobs",
        link:"http://resources.mhs.vic.edu.au/creating/downloads/The_Monkey's_Paw.pdf",
        dateWritten: 1902,
        plot : "In this terrifying tale, readers will learn to be careful what they wish for– it might not always be what they want.",
        genre:["horror","dark","twist"]
    },
    {
        title: "A Hunger Artist",
        author: "Franz Kafka",
        dateWritten: 1922,
        link:"http://ada.evergreen.edu/~arunc/texts/literature/kafka/hunger.pdf",
        genre:["dark","shocking"],
        plot:"Exploring themes like death, art, isolation and personal failure, this work is one of Kafka’s best and, sadly, most autobiographical."
    },
    {
        title: "Signs and Symbols",
        author: "Vladimir Nabokov",
        dateWritten: 1948,
        genre:["dark","shocking"],
        link:"http://www.newyorker.com/magazine/1948/05/15/symbols-and-signs",
        plot:"First published in The New Yorker, this short story tells the sad tale of an elderly couple and their mentally ill son."        
    },
    {
        title: "The Fall of the House of Usher",
        author: "Edgar Allan Poe",
        dateWritten: 1839,
        link:"http://www.ibiblio.org/ebooks/Poe/Usher.pdf",
        plot : "This classic tale of gothic horror will have you hanging on to every last detail.",
        genre:["famous","horror","dark"]
    },
    {
        title: "The Tell-Tale Heart",
        author: "Edgar Allan Poe",
        link:"http://xroads.virginia.edu/~hyper/POE/telltale.html",
        dateWritten: 1843,
        plot : "There are few out there who haven’t read or at least heard of this classic tale. Over a few short pages, Poe builds the suspense as a murderer begins to feel the guilt of his crime.",
        genre : ["famous","horror","dark"]
    },
    {
        title: "An Occurrence at Owl Creek Bridge",
        author: "Ambrose Bierce",
        dateWritten: 1890,
        link:"http://compositionawebb.pbworks.com/f/owl.pdf",
        plot : "Made into a Twilight Zone episode, this classic short story is set during the Civil War, where a man is about to hang for being a Confederate sympathizer.",
        genre:["twist","adventure","drama"]
    },
    {
        title: "The Yellow Wallpaper",
        author: "Charlotte Perkins Gilman",
        link:"https://www.nlm.nih.gov/literatureofprescription/exhibitionAssets/digitalDocs/The-Yellow-Wall-Paper.pdf",
        dateWritten: 1892,
        genre:["dark","shocking"],
        plot:"An early work of feminist literature, this story follows a young woman as she descends into psychosis, becoming obsessed with the pattern and color of the wallpaper."
    },
    {   
        title : "The Secret Life of Walter Mitty",
        dateWritten : 1939, 
        author : "James Thurber", 
        link:"http://www.fraumuenster.ch/wp-content/uploads/2013/09/The-Secret-Life-of-Walter-Mitty.pdf",
        plot : "The most famous of Thurber’s stories, inspiring the term 'Mittyesque', focuses on a man who is bored with his mundane life and escapes through a series of grand, heroic fantasies inspired by his surroundings.",
        genre : ["famous","fantasy"]
    },
    {
        title: "To Build a Fire",
        author: "Jack London",
        link:"http://americanenglish.state.gov/files/ae/resource_files/to-build-a-fire.pdf",
        dateWritten: 1908,
        plot : "Known for his epic tales about man in nature, this short story doesn’t disappoint as a man and dog are pitted against the wilderness in a battle for survival.",
        genre:["adventure","famous"]
    },
    {
        title: "The Dead",
        author: "James Joyce",
        link:"http://www.darlington.k12.sc.us/common/pages/DisplayFile.aspx?itemId=22079888",
        plot: "By general consensus, this is the greatest of all the stories in Dubliners — the longest, richest, and most emotionally affecting — and the story more than any other that points toward Joyce's career as one of the English language's greatest novelists ever.",
        dateWritten: 1914,
        genre:["drama","famous"]
    },
    {
        title: "In the Penal Colony",
        author: "Franz Kafka",
        link:"https://manwithoutqualities.files.wordpress.com/2011/09/in-the-penal-colony.pdf",
        dateWritten: 1919,
        genre:["dark","shocking","horror"],
        plot:"An elaborate torture and execution device that carves a sentence into a prisoner’s skin before death is at the center of this famous short story by Kafka."
    },
    {
        title: "The Garden Party",
        author: "Katherine Mansfield",
        plot:"The Sheridan family is preparing to host a garden party. Laura is supposed to be in charge but has trouble with the workers who appear to know better...",
        genre:["drama"]
        dateWritten: 1922,
        link:"http://www.katherinemansfieldsociety.org/assets/KM-Stories/THE-GARDEN-PARTY1921.pdf"
    },
    {
        title: "Hills Like White Elephants",
        author: "Ernest Hemingway",
        dateWritten: 1927,
        plot:"The story focuses on a conversation between an American man and a girl at a Spanish train station while waiting for a train to Madrid.",
        link:"http://www.massey.ac.nz/massey/fms/Colleges/College%20of%20Humanities%20and%20Social%20Sciences/EMS/Readings/139.105/Additional/Hills%20Like%20White%20Elephants%20-%20Ernest%20Hemingway.pdf",
        genre:["dark","drama"]
    },
    {
        title: "Harrison Bergeron",
        author: "Kurt Vonnegut, Jr.",
        dateWritten: 1961,
        plot : "In this satirical, dystopian story society has finally achieved equality by handicapping the most intelligent, athletic or beautiful members of society.",
        genre:["comedy","satire"],
        link:"http://www.tnellen.com/westside/harrison.pdf"
    },
    {
        title: "The Legend of Sleepy Hollow",
        author: "Washington Irving",
        link:"http://www.ibiblio.org/ebooks/Irving/Sleepy/Irving_Sleepy.pdf",
        dateWritten: 1820,
        genre: ["famous","horror"],
        plot:"From the listless repose of the place, and the peculiar character of its inhabitants, who are descendants from the original Dutch settlers, this sequestered glen has long been known by name of Sleepy Hollow ... A drowsy, dreamy influence seems to hang over the land, and to pervade the very atmosphere."
    },
    {
        title: "The Minister's Black Veil",
        author: "Nathaniel Hawthorne",
        dateWritten: 1836,
        plot:"One day, Parson Hooper, the reverend of Milford, arrives at mass on the Sabbath with a black veil covering his eyes. The townspeople immediately begin to gossip; some say that he has gone mad, while others believe he is covering a shameful sin.",
        genre:["drama"],
        link:"http://www.eldritchpress.org/nh/mbv.html"
    },
    {
        title: "The Masque of the Red Death",
        author: "Edgar Allan Poe",
        dateWritten: 1842,
        genre:["dark","drama","shocking"],
        plot:"The story follows Prince Prospero's attempts to avoid a dangerous plague known as the Red Death by hiding in his abbey.",
        link:"http://www.ibiblio.org/ebooks/Poe/Red_Death.pdf"

    },
    {
        title: "The Purloined Letter",
        author: "Edgar Allan Poe",
        dateWritten: 1844,
        genre:["adventure","cerebral"],
        link:"http://xroads.virginia.edu/~hyper/POE/purloine.html",
        plot:"The unnamed narrator is discussing with the famous Parisian amateur detective C. Auguste Dupin some of his most celebrated cases when they are joined by the Prefect of the Police, a man known as G—."
    },
    {
        title: "Bartleby the Scrivener",
        author: "Herman Melville",
        dateWritten: 1853,
        plot:"The narrator, an elderly, unnamed Manhattan lawyer with a comfortable business, relates the story of the strangest man he has known: Bartleby.",
        link:"http://moglen.law.columbia.edu/LCS/bartleby.pdf",
        genre:["drama"]

    },
    {
        title: "The Luck of Roaring Camp",
        author: "Bret Harte",
        dateWritten: 1868,
        plot:"The story is about the birth of a baby boy in a 19th-century gold prospecting camp.",
        genre:["drama","adventure","dark"],
        link: "http://www.bartleby.com/310/4/1.html"
    },
    {
        title: "The Outcasts of Poker Flat",
        author: "Bret Harte",
        dateWritten: 1869,
        genre:["drama","adventure"],
        plot:"The story takes place in a Californian community known as Poker Flat, near the town of La Porte. Poker Flat, some characters think, is on a downward slope.",
        link:"http://swc2.hccs.edu/kindle/Harte_Bret_The_Outcasts_of_Poker_Flat.pdf"
    },
    {
        title: "Rikki-Tikki-Tavi",
        author: "Rudyard Kipling",
        dateWritten: 1894,
        genre:["famous","adventure","colorful","fantasy"],
        link:"http://www.cs.cmu.edu/~mongoose/rtt.html",
        plot:"The story follows the experiences of a young mongoose named Rikki-Tikki-Tavi (for his chattering vocalizations) after he is adopted into a British family residing in India, as a pet and as protection against venomous cobra snakes."
    },
    {
        title: "Regret",
        plot:"This short story is about Mamzelle Aurelle who is still single at the age of 50. She has never been married; in fact, she has never been in love.",
        author: "Kate Chopin",
        dateWritten: 1894,
        genre:["drama"],
        link:"http://www.katechopin.org/pdfs/Kate%20Chopin,%20Regret.pdf"
    },
    {
        title: "The Story of An Hour",
        author: "Kate Chopin",
        dateWritten: 1894,
        plot:"The short story describes the series of emotions Louise Mallard endures after hearing of the death of her husband Brently",
        genre:["twist","drama","shocking"],
        link:"http://www.vcu.edu/engweb/webtexts/hour/"
    },
    {
        title: "The Lady With The Dog",
        author: "Anton Chekhov",
        dateWritten: 1899
    },
    {
        title: "How the Leopard Got His Spots",
        author: "Rudyard Kipling",
        dateWritten: 1902
    },
    {
        title: "Araby",
        author: "James Joyce",
        dateWritten: 1914
    },
    {
        title: "Goodbye, My Brother",
        author: "John Cheever",
        dateWritten: 1951
    },
    {
        title: "The Swimmer",
        author: "John Cheever",
        dateWritten: 1964,
        plot : "This story may have been originally conceived as a novel, but it holds up well as a short story, blending realism and surrealism as it explores life in suburban American.",
        genre :["drama","famous"]
    },
    {
        title: "Cathedral",
        author: "Raymond Carver",
        dateWritten: 1983
    },
    {
        title: "A Passion in the Desert",
        author: "Honore de Balzac",
        dateWritten: 1830
    },
    {
        title: "The Pit and the Pendulum",
        author: "Edgar Allan Poe",
        dateWritten: 1842
    },
    {
        title: "The Birth-Mark",
        author: "Nathaniel Hawthorne",
        dateWritten: 1843
    },
    {
        title: "Thrawn Janet",
        author: "Robert Louis Stevenson ",
        dateWritten: 1881
    },
    {
        title: "The Death of Ivan Ilych",
        author: "Leo Tolstoy",
        dateWritten: 1886
    },
    {
        title: "The Open Boat",
        author: "Stephen Crane",
        dateWritten: 1897
    },
    {
        title: "Gooseberries",
        author: "Anton Chekhov",
        dateWritten: 1898
    },
    {
        title: "A Dark Brown Dog",
        author: "Stephen Crane",
        dateWritten: 1901
    },
    {
        title: "The Gift of the Magi",
        author: "O. Henry",
        dateWritten: 1905,
        genre:["twist"],
        plot : "This sentimental story has a twist with a lesson about the true meaning of gift giving."
    },
    {
        title: "Eveline",
        author: "James Joyce",
        dateWritten: 1914
    },
    {
        title: "Bliss",
        author: "Katherine Mansfield",
        dateWritten: 1920
    },
    {
        title: "The Fly",
        author: "Katherine Mansfield",
        dateWritten: 1922,
        genre : ["dark","shocking"],
        plot:"This short story deals with some heavy themes, like death, truth and the horrors of war."
    },
    {
        title: "The Diamond As Big as the Ritz",
        author: "F. Scott Fitzgerald",
        dateWritten: 1922,
        plot : "Included in a short story collection and published on its own, this story documents the lengths one family will go to in order to keep their secret source of wealth a hidden.",
        genre:["drama"]
    },
    {
        title: "The Most Dangerous Game",
        author: "Richard Connell",
        dateWritten: 1924,
        plot : "Adapted into a movie starring Ice-T, the literary version of this story is perhaps more serious and compelling than the pop culture it has inspired.",
        genre : ["adventure","famous"]
    },
    {
        title: "The Story of My Dovecot",
        author: "Isaac Babel",
        dateWritten: 1925
    },
    {
        title: "A Jury of Her Peers",
        author: "Susan Glaspell",
        dateWritten: 1927
    },
    {
        title: "The Killers",
        author: "Ernest Hemingway",
        dateWritten: 1927
    },
    {
        title: "A Rose for Emily",
        author: "William Faulkner",
        dateWritten: 1930
    },
    {
        title: "That Evening Sun",
        author: "William Faulkner",
        dateWritten: 1931
    },
    {
        title: "Guests of the Nation",
        author: "Frank O'Connor",
        dateWritten: 1931
    },
    {
        title: "A Clean, Well-Lighted Place",
        author: "Ernest Hemingway",
        dateWritten: 1933
    },
    {
        title: "The Devil and Daniel Webster",
        author: "Stephen Vincent Benet",
        dateWritten: 1937
    },
    {
        title: "The Use of Force",
        author: "William Carlos Williams",
        dateWritten: 1938,
        genre:["dark","shocking"],
        plot : "This story asks readers to consider whether or not it is ethical to hurt someone for their own good and, more importantly, whether one should be ashamed to enjoy the experience."
    },
    {
        title: "The Door",
        author: "E. B White",
        dateWritten: 1939
    },
    {
        title: "A Very Old Man with Enormous Wings",
        author: "Gabriel Garcia Marquez",
        dateWritten: 1955,
        plot : "This magical realist story focuses on a couple who have found what they believe to be an angel in their front yard– for better or for worse.",
        genre:["famous","fantasy"]
    },
    {
        title: "Sonny's Blues",
        author: "James Baldwin",
        dateWritten: 1957
    },
    {
        title: "A & P",
        author: "John Updike",
        dateWritten: 1961
    },
    {
        title: "Where Are You Going, Where Have You Been?",
        author: "Joyce Carol Oates",
        dateWritten: 1966,
        genre:["dark","shocking"],
        plot:"This short story was inspired by the murders committed in Tucson, Arizona, by serial killer Charles Schmid."
    },
    {
        title: "The Ambitious Guest",
        author: "Nathaniel Hawthorne",
        dateWritten: 1835
    },
    {
        title: "The Diary of a Madman",
        author: "Nikolai Gogol",
        dateWritten: 1835
    },
    {
        title: "The Nose",
        author: "Nikolai Gogol",
        dateWritten: 1835,
        plot : "This short satirical work tells the tale of a St. Petersburg official whose nose decides it’s had enough and leaves his face to start a life of its own.",
        genre:["comedy","dark"]
    },
    {
        title: "The Eclipse",
        author: "James Fenimore Cooper",
        dateWritten: 1833
    },
    {
        title: "The Baron of Grogzwig",
        author: "Charles Dickens",
        dateWritten: 1839
    },
    {
        title: "The Overcoat",
        author: "Nikolai Gogol",
        dateWritten: 1842
    },
    {
        title: "A Christmas Carol",
        author: "Charles Dickens",
        dateWritten: 1843
    },
    {
        title: "The Lightning-Rod Man",
        author: "Herman Melville",
        dateWritten: 1854
    },
    {
        title: "Scarlet Stockings",
        author: "Louisa May Alcott",
        dateWritten: 1869
    },
    {
        title: "Boule de Suif",
        author: "Guy de Maupassant",
        dateWritten: 1880
    },
    {
        title: "A Lodging for the Night",
        author: "Robert Louis Stevenson",
        dateWritten: 1882
    },
    {
        title: "Two Views of The Mississippi",
        author: "Mark Twain",
        dateWritten: 1883
    },
    {
        title : "The South", 
        author : "Jorge Luis Borges", 
        plot : "Considered by Borges to be one of his best short stories, this story centers on a man who is on his way home after a near death experience.",
        genre:["adventure","famous"],
        dateWritten: 1953
    },
    {
        title: "The Looking Glass",
        author: "Anton Chekhov",
        dateWritten: 1885,
        plot : "A marriage-obsessed young woman begins to see her future life being played out in her looking glass in this short tale.",
        genre:["fantasy"]
    },
    {
        title: "The Private History of a Campaign That Failed",
        author: "Mark Twain",
        dateWritten: 1885
    },
    {
        title: "The Griffin and the Minor Canon",
        author: "Frank Stockton",
        dateWritten: 1885
    },
    {
        title: "The Strange Case of Dr Jekyll and Mr Hyde",
        author: "Robert Louis Stevenson",
        dateWritten: 1886
    },
    {
        title: "The Nightingale and the Rose",
        author: "Oscar Wilde",
        dateWritten: 1888,
        plot : "This story uses the form of a fairy tale to look at love, sacrifice and relationships.",
        genre:["fantasy","famous"]
    },
    {
        title: "The Man Who Would Be King",
        author: "Rudyard Kipling",
        dateWritten: 1888
    },
    {
        title: "A Horseman in the Sky",
        author: "Ambrose Bierce",
        dateWritten: 1889
    },
    {
        title: "The Boarded Window",
        author: "Ambrose Bierce",
        dateWritten: 1891
    },
    {
        title: "Under The Lion's Paw",
        author: "Hamlin Garland",
        dateWritten: 1891
    },
    {
        title: "Desiree's Baby",
        author: "Kate Chopin",
        dateWritten: 1893
    },
    {
        title: "Little Herr Friedemann",
        author: "Thomas Mann",
        dateWritten: 1896
    },
    {
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        dateWritten: 1899
    },
    {
        title: "Youth",
        author: "Joseph Conrad",
        dateWritten: 1902
    },
    {
        title: "Was it Heaven? Or Hell?",
        author: "Mark Twain",
        dateWritten: 1903
    },
    {
        title: "Eve's Diary",
        author: "Mark Twain",
        dateWritten: 1905
    },
    {
        title: "Paul's Case",
        author: "Willa Cather",
        dateWritten: 1905
    },
    {
        title: "The Skylight Room",
        author: "O. Henry",
        dateWritten: 1906
    },
    {
        title: "The Last Leaf",
        author: "O. Henry",
        dateWritten: 1906
    },
    {
        title: "On The Gull's Road",
        author: "Willa Cather",
        dateWritten: 1908
    },
    {
        title: "The Cactus",
        author: "O. Henry",
        dateWritten: 1905
    },
    {
        title: "The Princess And The Puma",
        author: "O. Henry",
        dateWritten: 1905
    },
    {
        title: "A Municipal Report",
        author: "O. Henry",
        dateWritten: 1905
    },
    {
        title: "The Secret Sharer",
        author: "Joseph Conrad",
        dateWritten: 1909
    },
    {
        title: "Sredni Vashtar",
        author: "Saki (Hugh Munro)",
        dateWritten: 1900
    },
    {
        title: "The Prussian Officer",
        author: "D H Lawrence",
        dateWritten: 1914
    },
    {
        title: "The Metamorphosis",
        author: "Franz Kafka",
        dateWritten: 1915
    },
    {
        title: "The Tale",
        author: "Joseph Conrad",
        dateWritten: 1917
    },
    {
        title: "A. V. Laider",
        author: "Max Beerbohm",
        dateWritten: 1919
    },
    {
        title: "Kew Gardens",
        author: "Virginia Woolf",
        dateWritten: 1919
    },
    {
        title: "A Haunted House",
        author: "Virginia Woolf",
        dateWritten: 1921
    },
    {
        title: "Rain",
        author: "W. Somerset Maugham",
        dateWritten: 1921
    },
    {
        title: "Haircut",
        author: "Ring Lardner",
        dateWritten: 1925
    },
    {
        title: "My First Goose",
        author: "Isaac Babel",
        dateWritten: 1926
    },
    {
        title: "A Telephone Call",
        author: "Dorothy Parker",
        dateWritten: 1930
    },
    {
        title: "Theft",
        author: "Katherine Anne Porter",
        dateWritten: 1930
    },
    {
        title: "Dry September",
        author: "William Faulkner",
        dateWritten: 1931
    },
    {
        title: "Guy de Maupassant",
        author: "Isaac Babel",
        dateWritten: 1932
    },
    {
        title: "Death In The Woods",
        author: "Sherwood Anderson",
        dateWritten: 1933
    },
    {
        title: "Shooting An Elephant",
        author: "George Orwell",
        dateWritten: 1936
    },
    {
        title: "Spring in Fialta",
        author: "Vladimir Nabokov",
        dateWritten: 1936
    },
    {
        title: "In Dreams Begin Responsibilities",
        author: "Delmore Schwartz",
        dateWritten: 1937
    },
    {
        title: "Leiningen versus the Ants",
        author: "Carl Stephenson",
        dateWritten: 1938
    },
    {
        title: "The Girls In Their Summer Dresses",
        author: "Irwin Shaw",
        dateWritten: 1939
    },
    {
        title: "The Wall",
        author: "Jean-Paul Sartre",
        dateWritten: 1939
    },
    {
        title: "Tlon, Uqbar, Orbis Tertius",
        author: "Jorge Luis Borges",
        dateWritten: 1940
    },
    {
        title: "Madame Zilensky and the King of Finland",
        author: "Carson McCullers",
        dateWritten: 1941
    },
    {
        title: "Beware of The Dog",
        author: "Roald Dahl",
        dateWritten: 1944
    },
    {
        title: "The Aleph",
        author: "Jorge Luis Borges",
        dateWritten: 1945
    },
    {
        title: "For Esme with Love and Squalor",
        author: "JD Salinger",
        dateWritten: 1950
    },
    {
        title: "The Chaser",
        author: "John Collier",
        dateWritten: 1951
    },
    {
        title: "A Sound of Thunder",
        author: "Ray Bradbury",
        dateWritten: 1952,
        plot : "This work is the most re-published sci-fi short story of all time, documenting with great aplomb the devastating consequences of the 'butterfly effect.'",
        genre: ["scifi","famous"]
    },
    {
        title: "A Mother's Tale",
        author: "James Agee",
        dateWritten: 1952
    },
    {
        title: "The Five-Forty-Eight",
        author: "John Cheever",
        dateWritten: 1954
    },
    {
        title: "The Ledge",
        author: "Lawrence Sargent Hall",
        dateWritten: 1959
    }
];