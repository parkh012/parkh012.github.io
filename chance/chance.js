//WORD ARRAYS

var threeLetterWords = ["the", "and", "you", "was", "for", "are", "his", "one", "had", "but", "not", 
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
					    ];


var fiveLetterWords = ["words", "there", "which", "their", "other", "about", "these", "would", "write",
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
					   "eight", "terms", "radio", "march", "total", "apple", "tools", "track", "jewel",
					   ];


var sevenLetterWords = ["picture", "america", "between", "country", "thought", "example", "without",
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
						];

var nineLetterWords = ["different", "something", "important", "sometimes", "mountains", "questions",
				       "carefully", "scientist", "thousands", "syllables", "direction", "exercised",
				       "developed", "beautiful", "paragraph", "represent", "consonant", "continued",
				       "president", "statement", "sentences", "questions", "completed", "remembers",
				       "languages", "governing", "necessary", "factories", "molecular", "adjective",
				       "similarly", "stretched", "determine", "substance", "condition", "underline",
				       "paparazzi", "fuzziness", "applejack", "mezzanine", "squeezing", "kickboxer",
				       "objectify", "abilities", "admission", "chocolate", "identical", "challenge",
				       "adventure", "knowledge", "pollution", "alligator", "community", "invisible",
				       "nutrition", "beginning", "wonderful", "influence", "affection", "secretary",
				       "boulevard", "breakfast", "withering", "breathing", "integrity", "confusion",
				       "curiosity", "turquoise", "afterlife", "abduction", "lightning", "territory",
				       "whimsical", "magnesium", "caribbean", "deception", "treasurer", "fairytale",
				       "sanctuary", "saxophone", "signature", "peninsula", "democracy", "honeymoon",
				       "snowflake", "etiquette", "sacrifice", "harmonica", "elevation", "fragrance",
				       "barbarian", "metronome", "cigarette", "blueberry", "ascending", "automatic",
				       "parachute", "rebellion", "encounter", "commotion", "obsession", "avalanche",
				       ];






//MANDALA GENERATOR

	var randomThree = Math.floor(Math.random()*threeLetterWords.length); 
	var randomFive = Math.floor(Math.random()*fiveLetterWords.length);
	var randomSeven = Math.floor(Math.random()*sevenLetterWords.length);
	var randomNine = Math.floor(Math.random()*nineLetterWords.length);
	
	var randomThreeValue = threeLetterWords[randomThree];
	var randomFiveValue = fiveLetterWords[randomFive];
	var randomSevenValue = sevenLetterWords[randomSeven];
	var randomNineValue = nineLetterWords[randomNine];
	
	var totalWords = Math.floor(Math.random()*18) + 3;
	var rotation = 0;
	
	for (var i = 0; i < totalWords; i++) {
	  $(".ring-1").append('<div class="word word-1 black">' + randomThreeValue + '</div>');
	  console.log(randomThreeValue);
	};
	
	$(".word-1").each(function() {
	  $(this).css("transform", "translate(-50%,-50%) rotate(" + rotation + "deg)");
	  rotation = rotation + 360/totalWords;
	});
	
	totalWords = Math.floor(Math.random()*18) + 3;
	rotation = 0;
	
	for (var i = 0; i < totalWords; i++) {
	  $(".ring-2").append('<div class="word word-2 darkgrey">' + randomFiveValue + '</div>');
	  console.log(randomFiveValue);
	};
	
	$(".word-2").each(function() {
	  $(this).css("transform", "translate(-50%,-50%) rotate(" + rotation + "deg)");
	  rotation = rotation + 360/totalWords;
	});
	
	totalWords = Math.floor(Math.random()*18) + 3;
	rotation = 0;
	
	for (var i = 0; i < totalWords; i++) {
	  $(".ring-3").append('<div class="word word-3 grey">' + randomSevenValue + '</div>');
	  console.log(randomSevenValue);
	};
	
	$(".word-3").each(function() {
	  $(this).css("transform", "translate(-50%,-50%) rotate(" + rotation + "deg)");
	  rotation = rotation + 360/totalWords;
	});
	
	totalWords = Math.floor(Math.random()*18) + 3;
	rotation = 0;
	
	for (var i = 0; i < totalWords; i++) {
	  $(".ring-4").append('<div class="word word-4 lightgrey">' + randomNineValue + '</div>');
	  console.log(randomNineValue);
	};
	
	$(".word-4").each(function() {
	  $(this).css("transform", "translate(-50%,-50%) rotate(" + rotation + "deg)");
	  rotation = rotation + 360/totalWords;
	});






//NEW MANDALA ON CLICK

//get coordinates of click location
//create new mandala 
//put e.ClientX and e.ClientY in for top and left values in css

//$(window).click(function(e) {
//	console.log(e.clientX);
//	console.log(e.clientY);	
//});


$(window).click(function(e) {
	$(".mandala").css("top", + e.clientY + "px");
	$(".mandala").css("left", + e.clientX + "px");
});

 
$(".mandala").hover(function() {
	$(".poem").html(randomThreeValue + " " + randomFiveValue + " " + randomSevenValue + " " + randomNineValue);
});








//COLOR CHANGING EFFECT

var myColors = ["navy", "mediumblue", "blue", "teal", "deepskyblue", "darkturquoise", "cyan",
	            "lightseagreen", "darkslategrey", "turquoise", "cornflowerblue", "steelblue", "cadetblue",
	            "royalblue", "slateblue", "skyblue", "lightblue", "lightsteelblue", "lightcyan", "lavender",
	            "lightpink", "peachpuff", "mistyrose", "linen", "lightsalmon", "lightcoral", "plum", "rosybrown",
	            "darkseagreen", "darkmagenta", "palevioletred", "blueviolet", "indigo", "darkslateblue",
	           ];

$(window).scroll(function() {
	console.log($(window).scrollTop());

	var scrollVal = $(this).scrollTop();
	if (scrollVal > 1 && scrollVal < 2000) {
		var randomColorNum = Math.floor(Math.random()*myColors.length);
		var randomColorVal = myColors[randomColorNum];
		$(".black").css("color", randomColorVal);
		var randomColorNum = Math.floor(Math.random()*myColors.length);
		var randomColorVal = myColors[randomColorNum];
		$(".darkgrey").css("color", randomColorVal);
		var randomColorNum = Math.floor(Math.random()*myColors.length);
		var randomColorVal = myColors[randomColorNum];
		$(".grey").css("color", randomColorVal);
		var randomColorNum = Math.floor(Math.random()*myColors.length);
		var randomColorVal = myColors[randomColorNum];
		$(".lightgrey").css("color", randomColorVal);
	} else { 
		$(".black").css("color", "#000000");
		$(".darkgrey").css("color", "#4d4d4d");
		$(".grey").css("color", "999999");
		$(".lightgrey").css("color", "#e6e6e6");
	}
});
