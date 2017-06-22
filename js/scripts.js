//to be moved to back end
var string;
//to be moved to front end
string = prompt("Phrase to translate?");
//back-end
var translatedString;
//console.log(string);
//behavior 2
var pigTranslate = (function () {

  string = string.toLowerCase();
  //console.log(string);
  // var vowelsRE = new RegExp('a*e*i*o*u');
// rabbit hole....    var vowelsRE = /'a*e*i*o*u'/;


  if (string.charAt(0) === "a" || string.charAt(0) === "e" || string.charAt(0) === "i" || string.charAt(0) === "o" || string.charAt(0) === "u" ) {
    translatedString = string + "way";
    alert(translatedString);

    // behavior 3
  }



})








//front-end
$(document).ready(function () {

  pigTranslate();
})
