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
        genre:["drama"],
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
        dateWritten: 1899,
        plot:"This short story tells the story of an adulterous affair between a Russian banker and a young lady he meets while vacationing in Yalta.",
        genre: ["drama"],
        link: "http://www.shortstoryamerica.com/pdf_classics/chekhov_lady_withthe_pet_dog.pdf"
    },
    {
        title: "How the Leopard Got His Spots",
        author: "Rudyard Kipling",
        dateWritten: 1902,
        genre: ["fantasy","colorful"],
        link:"http://etc.usf.edu/lit2go/79/just-so-stories/1304/how-the-leopard-got-his-spots/",
        plot:"A colorful tale surrounding how this fearsome creature obtained it's unique pattern.",
        
    },
    {
        title: "Goodbye, My Brother",
        author: "John Cheever",
        dateWritten: 1951,
        plot:"The Pommeroy family, consisting of three sons and one daughter and their mother meet, at the family summer place at Laud's Head on the shore of a Massachusetts island. They are all married now and have children and do not meet very often. All are in accord and have a wonderful time, except Lawrence who is a pessimistic, disapproving man.",
        genre:["drama","dark"],
        link:"https://thelifelonglearningacademy.com/wp-content/uploads/2013/11/F13-36-2A-Goodbye.pdf"
    },
    {
        title: "The Swimmer",
        author: "John Cheever",
        dateWritten: 1964,
        plot : "This story may have been originally conceived as a novel, but it holds up well as a short story, blending realism and surrealism as it explores life in suburban American.",
        genre :["drama","famous","dark"],
        link:"http://www.loa.org/images/pdf/Cheever_Swimmer.pdf"
    },
    {
        title: "Cathedral",
        author: "Raymond Carver",
        dateWritten: 1983,
        plot:"On the surface, 'Cathedral' is a story about a dissatisfied man whose encounter with his wife's blind friend teaches him new ways of seeing. Beneath the surface it's a story about three people who need each other badly, and manage to connect.",
        genre:["drama"],
        link:"http://www.giuliotortello.it/ebook/cathedral.pdf"
    },
    {
        title: "The Pit and the Pendulum",
        author: "Edgar Allan Poe",
        dateWritten: 1842,
        plot:"An unnamed narrator is brought to trial before sinister judges. Poe provides no explanation of why he is there or what he has been arrested for. Before him are seven tall white candles on a table, and, as they melt, his hopes of survival also diminish...",
        genre:["horror","dark","adventure"],
        link:"http://www.ibiblio.org/ebooks/Poe/Pit_Pendulum.pdf"
    },
    {
        title: "The Birth-Mark",
        author: "Nathaniel Hawthorne",
        dateWritten: 1843,
        plot:"'The Birth-Mark' is a romantic short story that examines obsession with human perfection.",
        genre:["romance","dark"],
        link:"http://www.lem.seed.pr.gov.br/arquivos/File/livrosliteraturaingles/birthmark.pdf"
    },
    {
        title: "Thrawn Janet",
        author: "Robert Louis Stevenson ",
        plot:"The Reverend Murdoch Soulis was long minister of the moorland parish of Balweary, in the vale of Dule. A severe, bleak-faced old man, dreadful to his hearers, he dwelt in the last years of his life, without relative or servant or any human company, in the small and lonely manse under the Hanging Shaw...",
        dateWritten: 1881,
        genre:["dark","horror"],
        link:"http://www.hornpipe.com/mystclas/myscl21.pdf"
    },
    {
        title: "The Death of Ivan Ilych",
        author: "Leo Tolstoy",
        plot:"The novella tells the story of the death of a high-court judge in 19th-century Russia.",
        dateWritten: 1886,
        genre:["drama","shocking"],
        link:"http://opie.wvnet.edu/~jelkins/lawyerslit/stories/death-of-ivan-ilych.pdf"
    },
    {
        title: "The Open Boat",
        author: "Stephen Crane",
        dateWritten: 1897,
        plot:"This short story is based on Crane's experience of surviving a shipwreck off the coast of Florida earlier that year while traveling to Cuba to work as a newspaper correspondent.",
        genre:["adventure"],
        link:"http://public.wsu.edu/~campbelld/crane/open.htm"
    },
    {
        title: "Gooseberries",
        author: "Anton Chekhov",
        dateWritten: 1898,
        plot:"'Gooseberries' opens with a vivid description of a country landscape on a rainy day. Caught in a downpour, Ivan Ivanich Chimsha-Himalaisky, a veterinary surgeon, and his friend Burkin, a high-school teacher, decide to find shelter at the home of a friend, the landowner Pavel Konstantinich Alekhin.",
        link:"http://www.eldritchpress.org/ac/gooseb.html",
        genre:["drama"]
    },
    {
        title: "A Dark Brown Dog",
        author: "Stephen Crane",
        dateWritten: 1901,
        plot:"...The child stood dreamily gazing. After a time, a little dark-brown dog came trotting with an intent air. down the sidewalk. A short rope was dragging from his neck...",
        link:"https://public.wsu.edu/~campbelld/crane/dark.htm",
        genre:["drama","dark"]

    },
    {
        title: "The Gift of the Magi",
        author: "O. Henry",
        dateWritten: 1905,
        genre:["twist","romantic"],
        link:"https://www.auburn.edu/~vestmon/Gift_of_the_Magi.html",
        plot : "This sentimental story has a twist with a lesson about the true meaning of gift giving."
    },
    {
        title: "Eveline",
        author: "James Joyce",
        dateWritten: 1914,
        plot:"A young woman of about nineteen years of age sits by her window, waiting to leave home. She muses on the aspects of her life that are driving her away, while 'in her nostrils was the smell of dusty cretonne'",
        link:"http://docenti.lett.unisi.it/files/19/27/2/9/eveline_text.pdf",
        genre:["drama"]
    },
    {
        title: "The Fly",
        author: "Katherine Mansfield",
        dateWritten: 1922,
        genre : ["dark","shocking"],
        link:"https://literature2.files.wordpress.com/2011/11/the-fly.pdf",
        plot:"This short story deals with some heavy themes, like death, truth and the horrors of war."
    },
    {
        title: "The Diamond As Big as the Ritz",
        author: "F. Scott Fitzgerald",
        dateWritten: 1922,
        link:"http://www4.ncsu.edu/unity/users/m/morillo/public/fitzgeraldstories1.pdf",
        plot : "Included in a short story collection and published on its own, this story documents the lengths one family will go to in order to keep their secret source of wealth a hidden.",
        genre:["drama"]
    },
    {
        title: "The Most Dangerous Game",
        author: "Richard Connell",
        dateWritten: 1924,
        link:"http://www.dukeofdefinition.com/dangerous_game.pdf",
        plot:"The story is inspired by the big-game hunting safaris in Africa and South America that were particularly fashionable among wealthy Americans in the 1920s.",
        genre : ["adventure","famous"]
    },
    {
        title: "The Story of My Dovecot",
        author: "Isaac Babel",
        dateWritten: 1925,
        plot:"“The Story of My Dovecot” describes the effect of the notorious pogrom of October 20, 1905, on the Babel family and particularly on the author himself as a boy of eleven.",
        link:"https://markmcbride.wordpress.com/2012/08/04/isaac-babels-the-story-of-my-dovecot-fulltext/",
        genre:["shocking","drama"]
    },
    {
        title: "A Jury of Her Peers",
        author: "Susan Glaspell",
        dateWritten: 1927,
        plot:"Here is a short story by Susan Glaspell, loosely based on the 1900 murder of John Hossack (not the famed abolitionist), which Glaspell covered while working as a journalist.",
        link:"http://www.learner.org/interactives/literature/story/fulltext.html",
        genre:["cerebral","drama","adventure"]
    },
    {
        title: "The Killers",
        author: "Ernest Hemingway",
        dateWritten: 1927,
        plot:"This story involves a pair of criminals who enter a restaurant seeking to kill a boxer, a Swede named Ole Andreson, who is hiding out for reasons unknown.",
        link:"http://www.24grammata.com/wp-content/uploads/2014/08/Hemingway-The-Killers-24grammata.com_.pdf",
        genre:["adventure","drama"]
    },
    {
        title: "A Rose for Emily",
        author: "William Faulkner",
        dateWritten: 1930,
        plot:"Faulkner described the title as 'an allegorical title; the meaning was, here was a woman who has had a tragedy and nothing could be done about it, and I pitied her and this was a salute ... to a woman you would hand a rose.",
        link:"http://resources.mhs.vic.edu.au/creating/downloads/A_Rose_for_Emily.pdf",
        genre:["drama"]
    },
    {
        title: "Guests of the Nation",
        author: "Frank O'Connor",
        dateWritten: 1931,
        plot:"This story portrays the execution of two Englishmen held captive by the Irish Republican Army during the War for Independence.",
        link:"http://www.csus.edu/indiv/m/maddendw/The-Oxford-Book-of-Short-Stories_29GuestsoftheNation.pdf",
        genre:["drama","adventure"]
    },
    {
        title: "A Clean, Well-Lighted Place",
        author: "Ernest Hemingway",
        dateWritten: 1933,
        plot:"An old, deaf man sits in a cafe, drinking late in to the night. All the other customers have left, and he is the sole patron remaining. Two waiters, one young and one older, sit at a table and watch him, sharing what they know of him through hearsay.",
        link:"http://www.mrbauld.com/hemclean.html",
        genre:["drama"]
    },
    {
        title: "The Devil and Daniel Webster",
        author: "Stephen Vincent Benet",
        dateWritten: 1937,
        plot:"Benet's version of this classic story centers on a New Hampshire farmer who sells his soul to the Devil and is defended by Daniel Webster, a fictional version of the famous lawyer and orator.",
        link:"http://www.hum.huji.ac.il/upload/_FILE_1370804282.pdf",
        genre:["fantasy","dark"]
    },
    {
        title: "The Use of Force",
        author: "William Carlos Williams",
        dateWritten: 1938,
        genre:["dark","shocking"],
        link:"http://www.classicshorts.com/stories/force.html",
        plot : "This story asks readers to consider whether or not it is ethical to hurt someone for their own good and, more importantly, whether one should be ashamed to enjoy the experience."
    },
    {
        title: "The Door",
        author: "E. B White",
        dateWritten: 1939,
        plot:"...Everything (he kept saying) is something it isn’t. And everybody is always somewhere else. Maybe it was the city, being in the city, that made him feel how queer everything was and that it was something else. Maybe (he kept thinking) it was the names of the things. The names were tex and frequently koid. Or they were flex and oid or they were duroid (sani) or flexsan (duro)...",
        link:"http://www.classicshorts.com/stories/door.html",
        genre:["dark","drama"]
    },
    {
        title: "A Very Old Man with Enormous Wings",
        author: "Gabriel Garcia Marquez",
        dateWritten: 1955,
        link:"http://www.jonescollegeprep.org/ourpages/auto/2014/1/29/42934518/A_Very_Old_Man_with_Enormous_Wings_pdf.pdf",
        plot : "This magical realist story focuses on a couple who have found what they believe to be an angel in their front yard– for better or for worse.",
        genre:["famous","fantasy"]
    },
    {
        title: "Sonny's Blues",
        author: "James Baldwin",
        dateWritten: 1957,
        plot:"The story opens with the narrator, who reads about his younger brother named Sonny who has been caught in a heroin bust.",
        link:"http://swcta.net/moore/files/2012/02/sonnysblues.pdf",
        genre:["drama","dark"]
    },
    {
        title: "Where Are You Going, Where Have You Been?",
        author: "Joyce Carol Oates",
        dateWritten: 1966,
        genre:["dark","shocking"],
        link:"https://www.d.umn.edu/~csigler/PDF%20files/oates_going.pdf",
        plot:"This short story was inspired by the murders committed in Tucson, Arizona, by serial killer Charles Schmid."
    },
    {
        title: "The Ambitious Guest",
        author: "Nathaniel Hawthorne",
        dateWritten: 1835,
        plot:"A young traveler stops for the night with a family that lives in a 'notch' next to a mountain. They make friendly conversation, interrupted once by the sound of a wagon carrying other travelers (who pause but do not go inside, continuing on with their journey) and then by the sound of rocks falling from the slope...",
        link:"http://www.online-literature.com/hawthorne/123/",
        genre:["adventure","drama","shocking"]
    },
    {
        title: "The Diary of a Madman",
        author: "Nikolai Gogol",
        dateWritten: 1835,
        plot:"The tale centers on the life of a minor civil servant during the repressive era of Nicholas I. Following the format of a diary, the story shows the descent of the protagonist, Poprishchin, into insanity.",
        link:"http://www.feedbooks.com/book/6464/diary-of-a-madman",
        genre:["drama","dark"]
    },
    {
        title: "The Nose",
        author: "Nikolai Gogol",
        dateWritten: 1835,
        plot : "This short satirical work tells the tale of a St. Petersburg official whose nose decides it’s had enough and leaves his face to start a life of its own.",
        genre:["comedy","dark"],
        link:"http://www.gutenberg.org/files/36238/36238-h/36238-h.htm#Page_67"
    },
    {
        title: "The Eclipse",
        author: "James Fenimore Cooper",
        dateWritten: 1833,
        plot:"The Eclipse is an autobiographical vignette by James Fenimore Cooper that was written between 1833 and 1838, recounting his own experience witnessing a solar eclipse in Cooperstown on the morning of June 16, 1806.",
        link:"http://americanliterature.com/author/james-fenimore-cooper/short-story/the-eclipse",
        genre:["scifi","drama"]
    },
    {
        title: "The Baron of Grogzwig",
        author: "Charles Dickens",
        dateWritten: 1839,
        plot:"...The Baron Von Koëldwethout, of Grogzwig in Germany, was as likely a young baron as you would wish to see. I needn't say that he lived in a castle, because that's of course; neither need I say that he lived in an old castle; for what German baron ever lived in a new one?",
        link:"http://www.eastoftheweb.com/short-stories/UBooks/BarGro.shtml",
        genre:["romance","drama","dark","horror"]
    },
    {
        title: "The Lightning-Rod Man",
        author: "Herman Melville",
        dateWritten: 1854,
        plot:"Poised Between 'Benito Cereno' and 'The Encantadas', two of Melville's most mature works of short fiction, is an innocuous little story about a peddler: 'The Lightning-Rod Man'.",
        link:"http://www.melville.org/lrman.htm",
        genre:["drama","cerebral"]
    },
    {
        title: "Scarlet Stockings",
        author: "Louisa May Alcott",
        dateWritten: 1869,
        plot:"In this story, Kate Lennox, a half-British, half-American orphan, enjoys a visit from her older brother, Harry, who has been away in Europe for five years.",
        link:"http://americanliterature.com/author/louisa-may-alcott/short-story/scarlet-stockings",
        genre:["romance","drama"]
    },
    {
        title: "Boule de Suif",
        author: "Guy de Maupassant",
        dateWritten: 1880,
        plot:"The story is set in the Franco-Prussian War and follows a group of French residents of Rouen, recently occupied by the Prussian army.",
        link:"http://www.eastoftheweb.com/short-stories/UBooks/BoulSuif.shtml",
        genre:["drama"]
    },
    {
        title: "A Lodging for the Night",
        author: "Robert Louis Stevenson",
        dateWritten: 1882,
        plot:"...It was late in November 1456. The snow fell over Paris with rigorous, relentless persistence; sometimes the wind made a sally and scattered it in flying vortices; sometimes there was a lull, and flake after flake descended out of the black night air, silent, circuitous, interminable...",
        link:"http://www.online-literature.com/stevenson/2966/",
        genre:["adventure","drama"]
    },
    {
        title: "Two Views of The Mississippi",
        author: "Mark Twain",
        dateWritten: 1883,
        plot:"In this short story, the author recounts his ability to recognize and appreciate beauty in his surroundings early in his career as a steamboat pilot on the Mississippi River, in contrast to his perceptions later in life.",
        link:"http://web.mnstate.edu/gracyk/courses/phil%20of%20art/printer-friendly/Mark%20Twain.pdf",
        genre:["colorful"]
    },
    {
        title : "The South", 
        author : "Jorge Luis Borges", 
        plot : "Considered by Borges to be one of his best short stories, this story centers on a man who is on his way home after a near death experience.",
        genre:["adventure","famous"],
        dateWritten: 1953,
        link:"https://jessbarga.wikispaces.com/file/view/Borges,+The+South.pdf"
    },
    {
        title: "The Looking Glass",
        author: "Anton Chekhov",
        dateWritten: 1885,
        plot : "A marriage-obsessed young woman begins to see her future life being played out in her looking glass in this short tale.",
        genre:["fantasy"],
        link:"http://www.online-literature.com/anton_chekhov/1142/"
    },
    {
        title: "The Strange Case of Dr Jekyll and Mr Hyde",
        author: "Robert Louis Stevenson",
        dateWritten: 1886,
        plot:"This story is about a London lawyer named Gabriel John Utterson who investigates strange occurrences between his old friend, Dr. Henry Jekyll, and the evil Edward Hyde.",
        link:"http://www.planetebook.com/ebooks/The-Strange-Case-of-Dr-Jekyll.pdf",
        genre:["adventure","horror","famous","drama"]
    },
    {
        title: "The Nightingale and the Rose",
        author: "Oscar Wilde",
        dateWritten: 1888,
        plot : "This story uses the form of a fairy tale to look at love, sacrifice and relationships.",
        genre:["fantasy","famous"],
        link:"http://www.eastoftheweb.com/short-stories/UBooks/NigRos.shtml"
    },
    {
        title: "The Metamorphosis",
        author: "Franz Kafka",
        dateWritten: 1915,
        link:"http://history-world.org/The_Metamorphosis_T.pdf",
        genre:["scifi","horror","adventure","famous"],
        plot:"This classic has been cited as one of the seminal works of fiction of the 20th century and is studied in colleges and universities across the Western world."
    },
    {
        title: "A Sound of Thunder",
        author: "Ray Bradbury",
        link:"http://www.rivermill-academy.org/common/pages/DisplayFile.aspx?itemId=22839533",
        dateWritten: 1952,
        plot : "This work is the most re-published sci-fi short story of all time, documenting with great aplomb the devastating consequences of the 'butterfly effect.'",
        genre: ["scifi","famous"]
    },
    {
        title:"In A Far Country",
        author:"Jack London",
        dateWritten:1899,
        plot:"A wealthy gentleman and a worldly person travels to north country for the sake of idealism.",
        link:"http://www.jacklondons.net/far_country.html",
        genre:["adventure","drama"]
    },
    {
        title:"The Guests",
        author:"Saki",
        plot:"A woman tells of a particularly stressful experience involving a visiting bishop, a flood and a hungry leopard.",
        link:"http://www.eastoftheweb.com/short-stories/UBooks/Gues.shtml",
        genre:["comedy"]
    },
    {
        title:"Death By Scrabble",
        author:"Charlie Fish",
        plot:"A game of Scrabble has serious consequences.",
        link:"http://www.eastoftheweb.com/short-stories/UBooks/DeatScra.shtml",
        genre:["comedy"]
    },
    {
        title:"The Lady Or The Tiger?",
        author:"Frank Stockton",
        plot:"A semi-barbaric king devises a semi-barabaric (but entirely fair) method of criminal trial involving two doors, a beautiful lady and a very hungry tiger.",
        link:"http://www.eastoftheweb.com/short-stories/UBooks/LadyTige.shtml",
        genre:["comedy"]
    }
];