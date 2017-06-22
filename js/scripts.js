//to be moved to back end
var string;
// var explodedString = [];
//to be moved to front end
string = prompt("Phrase to translate?");
//back-end
var translatedString;
var stopLoop=100;
var sliceLimit = 0;
//console.log(string);
var processConsonants = (function () {
  var consonantString = string.slice(0,sliceLimit);
  var stringBase = string.slice(sliceLimit);
  alert(stringBase + consonantString + "ay")
})

var pigTranslate = (function () {

  string = string.toLowerCase();
  //console.log(string);
  // var vowelsRE = new RegExp('a*e*i*o*u');
// rabbit hole....    var vowelsRE = /'a*e*i*o*u'/;
//behavior 4 insertion
for (var i = 0; i < stopLoop; i++) {

  if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u" ) {
    stopLoop = i;
  } else {
  sliceLimit +=1;
  }
}
  if (sliceLimit === 0) {
    translatedString = string + "way";
    alert(translatedString);
  } else if (string.charAt(sliceLimit-1) === "q" && string.charAt(sliceLimit) === "u") {
    sliceLimit += 1;
    processConsonants();
  } else {
    processConsonants();
  }
})








//front-end
$(document).ready(function () {

  pigTranslate();
})
