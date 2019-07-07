
// setting up the var as words
var wordSelection = ["Car1","Car2",
"Dog1","Dog2",
"cat1","cat2",
"color1","color2",
"shape1","shape2","borrow",
"motif",
'entry',
"organize",
"ground",
"Member",
"limit",
"quarter",
"hot",
"archive",
"quotation",
"remain",
"temporary",
"fun",
"absolute",
"fault",
"white",
"marble",
"Ranch",
"deliver",
"shorts",
"bishop"];



// setting up the var to find the array length.... works
var arrayLength = wordSelection.length;

// // var wordSelection =;

// //setting up the var to find a random number from the var for the array length
// var wordchoice = (Math.random(0,randomWord));


// var wordLength = wordChoice.length
//creates a var for the random numner that is maxed out for the array length var...works
var randomWord = wordSelection[Math.floor(Math.random()*arrayLength)];

//getting the character length of the selected word
var wordLength = randomWord.length;

//created a field for hidden letters
var hiddenLetter =("_ ");

//creating the empty fields based on the length of the words
for (i = 0; i < wordLength; i++) { document.write (hiddenLetter)};



    


//console.log to test what the vars are doing
console.log(arrayLength);
console.log(randomWord);
console.log(wordLength);