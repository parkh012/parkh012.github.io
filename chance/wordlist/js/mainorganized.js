var threeLetterWords = new Array("the", "and", "you", "was", "for", "are", "his", "one", "had", "but", "not", 
								 "all", "can", "use", "she", "how", "out", "her", "him", "has", "two", "men",
								 "see", "way", "who", "oil", "sit", "now", "day", "did", "get", "may", "new", 
								 "our", "man", "say", "too", "old", "any", "boy", "set", "put", "end", "big", 
								 "why", "ask", "try", "off", "air", "add", "own", "saw", "few", "got", "run", 
								 "car", "sea", "eat", "far", "let", "cut", "sun", "dog", "red", "top", "low",
								 "map", "war", "ten", "fly", "box", "ago", "ran", "dry", "yes", "yet", "hot", 
								 "six", "sum", "sat", "job", "sky", "lay", "son", "ice", "buy", "bed", "age", 
								 "per", "lot", "act", "let", "cat", "row", "gas", "law", "key", "bad", "pay",
								 "bit", "god", "art", "hit", "fit", "lie", "fun", "hat", "fig", "gun", "led", 
								 "win", "sir",
								 );


var fiveLetterWords = new Array("words", "there", "which", "their", "other", "about", "these", "would", "write",
								"could", "first", "water", "sound", "place", "years", "after", "thing", "think",
								"great", "where", "right", "means", "three", "small", "large", "again", "spell",
								"house", "point", "found", "study", "still", "learn", "world", "every", "below",
								"plant", "never", "start", "earth", "light", "under", "story", "while", "along",
								"might", "close", "those", "paper", "group", "often", "until", "night", "white",
								"began", "river", "carry", "state", "watch", "above", "young", "being", "leave",
								"music", "color", "horse", "birds", "since", "piece", "heard", "order", "today",
								"short", "hours", "black", "whole", "early", "waves", "space", "vowel", "table",
								"north", "money", "voice", "cried", "south", "field", "shown", "stars", "front",
								"ocean", "class", "green", "known", "stood", "plane", "round", "force", "bring",
								"shape", "clear", "check", "among", "power", "heavy", "built", "ready", "dance",
								"paint", "cause", "train", "heart", "store", "happy", "grass", "third", "shall",
								"drive", "cross", "speak", "solve", "metal", "sleep", "floor", "quite", "scale",
								"quiet", "stone", "build", "speed", "count", "angle", "fight", "dress", "least",
								"catch", "wrote", "glass", "cents", "cloud", "alone", "touch", "mouth", "equal",
								"stick", "party", "seeds", "woman", "coast", "clean", "visit", "serve", "child",
								"maybe", "break", "uncle", "human", "crops", "bones", "board", "guess", "trade",
								"enjoy", "seven", "value", "wings", "thick", "blood", "fruit", "sight", "chief",
								"eight", "terms", "radio", "march", "total", "apple", "tools", "track",
								);


var sevenLetterWords = new Array("picture", "america", "between", "country", "thought", "example", "without",
								 "problem", "usually", "friends", "however", "product", "measure", "reached",
								 "covered", "several", "himself", "morning", "hundred", "against", "pattern",
								 "numeral", "certain", "english", "finally", "correct", "quickly", "minutes",
								 "decided", "contain", "surface", "produce", "nothing", "machine", "brought",
								 "explain", "special", "include", "perhaps", "farmers", "divided", "general",
								 "subject", "believe", "members", "written", "brother", "present", "million",
								 "weather", "clothes", "whether", "flowers", "teacher", "factors", "century",
								 "outside", "already", "instead", "laughed", "section", "diction", "natural",
								 "someone", "exactly", "fingers", "climbed", "shouted", "england", "burning",
								 "trouble", "symbols", "drawing", "express", "decimal", "control", "suppose",
								 "receive", "strange", "captain", "history", "hunting", "feeling", "provide",
								 "soldier", "entered", "dollars", "planets", "science", "observe", "various",
								 "similar", "forward", "workers", "british", "evening", "details", "arrived",
								 "located", "effects",
								);

var nineLetterWords = new Array("different", "something", "important", "sometimes", "mountains", "questions",
								"carefully", "scientist", "thousands", "syllables", "direction", "exercised",
								"developed", "beautiful", "paragraph", "represent", "consonant", "continued",
								"president", "statement", "sentences", "questions", "completed", "remembers",
								"languages", "governing", "necessary", "factories", "molecular", "adjective",
								"similarly", "stretched", "determine", "substance", "condition", "underline",
								);



$("p").html(words[Math.floor(Math.random()*words.length)]);
$("p").append(" ");
$("p").append(words[Math.floor(Math.random()*words.length)]);
$("p").append(" ");
$("p").append(words[Math.floor(Math.random()*words.length)]);


