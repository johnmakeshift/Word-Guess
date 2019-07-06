
// setting up the var as words
var wordSelection = ["Car1","Car2",
"Dog1","Dog2",
"cat1","cat2",
"color1","color2",
"shape1","shape2"];



// setting up the var to find the array length.... works
var arrayLength = wordSelection.length;

// // var wordSelection =;

// //setting up the var to find a random number from the var for the array length
// var wordchoice = (Math.random(0,randomWord));


// var wordLength = wordChoice.length
//creates a var for the random numner that is maxed out for the array length var...works
var randomWord = wordSelection[Math.floor(Math.random()*arrayLength)];
// console.log(arrayLength);
// console.log(randomWord);
var wordLength = randomWord.length;
console.log(wordLength);