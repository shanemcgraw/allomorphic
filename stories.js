var stories = [
    {
        title: "The Last Question",
        author: "Isaac Asimov",
        dateWritten: 1956
    },
    {
        title: "The Celebrated Jumping Frog of Calaveras County",
        author: "Mark Twain",
        dateWritten: 1865
    },
    {
        title: "The Rocking-Horse Winner",
        author: "D.H. Lawrence",
        dateWritten: 1926
    },
    {
        title: "A Good Man Is Hard to Find",
        author: "Flannery O'Connor",
        dateWritten: 1953,
        genre : ["sad","shocking"],
        plot:"A manipulative grandmother is at the center of this tragic and shocking story about coming to terms with who you really are."
    },
    {
        title: "The Lame Shall Enter First",
        author: "Flannery O'Connor",
        dateWritten: 1965,
        genre : ["sad","shocking"],
        plot: "In this tragic story, a man’s idealism and self-interest cause him to ignore the needs of his grieving son– with sad consequences."
    {
        title: "The Necklace",
        author: "Guy de Maupassant",
        dateWritten: 1884
    },
    {
        title: "The Lottery",
        author: "Shirley Jackson",
        dateWritten: 1948,
        genre:
        plot: "First published in 1948, this short has been ranked as one of the most famous short stories in American literature– despite its negative reception in some places."
    },
    {
        title: "The Cask of Amontillado",
        author: "Edgar Allan Poe",
        dateWritten: 1846
    },
    {
        title: "The Monkey's Paw",
        author: "W. W. Jacobs",
        dateWritten: 1902
    },
    {
        title: "A Hunger Artist",
        author: "Franz Kafka",
        dateWritten: 1922,
        genre:["sad","shocking"],
        plot:"Exploring themes like death, art, isolation and personal failure, this work is one of Kafka’s best and, sadly, most autobiographical."
    },
    {
        title: "Young Goodman Brown",
        author: "Nathaniel Hawthorne",
        dateWritten: 1835
    },
    {
        title: "Signs and Symbols",
        author: "Nathaniel Hawthorne",
        dateWritten: 1835,
        genre:["sad","shocking"],
        plot:"First published in The New Yorker, this short story tells the sad tale of an elderly couple and their mentally ill son."        
    },
    {
        title: "The Fall of the House of Usher",
        author: "Edgar Allan Poe",
        dateWritten: 1839
    },
    {
        title: "The Tell-Tale Heart",
        author: "Edgar Allan Poe",
        dateWritten: 1843
    },
    {
        title: "An Occurrence at Owl Creek Bridge",
        author: "Ambrose Bierce",
        dateWritten: 1890
    },
    {
        title: "The Yellow Wallpaper",
        author: "Charlotte Perkins Gilman",
        dateWritten: 1892
    },
    {
        title: "To Build a Fire",
        author: "Jack London",
        dateWritten: 1908
    },
    {
        title: "The Dead",
        author: "James Joyce",
        dateWritten: 1914
    },
    {
        title: "In the Penal Colony",
        author: "Franz Kafka",
        dateWritten: 1919,
        genre:["sad","shocking"],
        plot:"An elaborate torture and execution device that carves a sentence into a prisoner’s skin before death is at the center of this famous short story by Kafka."
    },
    {
        title: "The Garden Party",
        author: "Katherine Mansfield",
        dateWritten: 1922
    },
    {
        title: "Hills Like White Elephants",
        author: "Ernest Hemingway",
        dateWritten: 1927
    },
    {
        title: "Harrison Bergeron",
        author: "Kurt Vonnegut, Jr.",
        dateWritten: 1961
    },
    {
        title: "The Legend of Sleepy Hollow",
        author: "Washington Irving",
        dateWritten: 1820
    },
    {
        title: "The Minister's Black Veil",
        author: "Nathaniel Hawthorne",
        dateWritten: 1836
    },
    {
        title: "The Masque of the Red Death",
        author: "Edgar Allan Poe",
        dateWritten: 1842
    },
    {
        title: "The Purloined Letter",
        author: "Edgar Allan Poe",
        dateWritten: 1844
    },
    {
        title: "Bartleby the Scrivener",
        author: "Herman Melville",
        dateWritten: 1853
    },
    {
        title: "The Luck of Roaring Camp",
        author: "Bret Harte",
        dateWritten: 1868
    },
    {
        title: "The Outcasts of Poker Flat",
        author: "Bret Harte",
        dateWritten: 1869
    },
    {
        title: "Rikki-Tikki-Tavi",
        author: "Rudyard Kipling",
        dateWritten: 1894
    },
    {
        title: "Regret",
        author: "Kate Chopin",
        dateWritten: 1894
    },
    {
        title: "The Story of An Hour",
        author: "Kate Chopin",
        dateWritten: 1894
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
        dateWritten: 1964
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
        dateWritten: 1905
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
        genre : ["sad","shocking"],
        plot:"This short story deals with some heavy themes, like death, truth and the horrors of war."
    },
    {
        title: "The Diamond As Big as the Ritz",
        author: "F. Scott Fitzgerald",
        dateWritten: 1922
    },
    {
        title: "The Most Dangerous Game",
        author: "Richard Connell",
        dateWritten: 1924
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
        dateWritten: 1938
    },
    {
        title: "The Door",
        author: "E. B White",
        dateWritten: 1939
    },
    {
        title: "A Very Old Man with Enormous Wings",
        author: "Gabriel Garcia Marquez",
        dateWritten: 1955
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
        dateWritten: 1966
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
        dateWritten: 1835
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
        title: "The Looking Glass",
        author: "Anton Chekhov",
        dateWritten: 1885
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
        dateWritten: 1888
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
        dateWritten: 1952
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