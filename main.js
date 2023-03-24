//& TASK 1

var Nm =new RegExp("^[A-Za-z]$","ig");
do {
    var Namee = prompt("Please Enter Your name")
} while (! Namee.match(Nm)) ;

var ph =/^[0-9]{8}$/g ;
do {
    var phone = prompt("Please Enter Your phone")
} while (! phone.match(ph));

var mob =new RegExp("^01[0125][0-9]{8}$","g");
do {
    var moblie = prompt("Please Enter Your moblie")
} while (! moblie.match(mob));

var mail =new RegExp("^([A-Za-z]|[0-9])+@123.com","ig");
do {
    var Email = prompt("Please Enter Your Emial")
} while (! Email.match(mail) );

console.log("Welcome Dear Guest " , Namee)
console.log("Your phone number is " , phone)
console.log("Your moblie number is " , moblie)
console.log("Your emial is " , Email )

//& Task 2

function findLargestWord(str) {
    let words = str.split(" ");
    let largestWord = "";
    for (let i = 0; i < words.length; i++) {
    if (words[i].length > largestWord.length) {
        largestWord = words[i];
    }
    }
    return largestWord;
}
var par="welcome this is the test"
console.log(findLargestWord(par))

//& TASK 3

var arr = [];
for ( var i = 0 ; i<5 ; i++ ) {
    arr[i] = prompt("Please Enter your Numbers ");
}
var maa =
document.write ('<FONT COLOR="red">' , "<h4>" ,"You have been enter   ")
document.write( '<FONT COLOR="black">',arr)
document.write ('<FONT COLOR="red">', "<br>" ,"<h4>" ,"Your Value after been sorted ascending   ")
document.write( '<FONT COLOR="black">',arr.sort(function(a,b){return a-b} ))
document.write ( '<FONT COLOR="red">',"<br>" ,"<h4>" ,"Your Value after been sorted descending  ")
document.write( '<FONT COLOR="black">',arr.sort(function(a,b){return b-a} ))

//& TASK 4

var r = prompt("Enter the circle redius ");
var area = Math.PI * Math.pow(r,2);
alert ("The area of the circle   "+ area);

var ro = prompt("What is the value you want to calculate its square root ");
alert ( "The square root of " +ro +" is "+Math.sqrt(ro));

var angle= prompt("Enter the angle")
document.write( "<h3>" ,"Cos ", angle,"\u00B0", "  is   " , Math.cos(angle).toFixed(4))






