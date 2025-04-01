/* Data Types
Undefined, null, boolean, string, symbol, number, object
*/

var myName = "John Doe"; // string
myName = 8;

let ourName = "Hello, World!"; // string

const pi = 3.14; // number

var a; // undefined
a = 7; // number
a = "Hello"; // string
console.log(a)


//Most of the features are similar to C programming language.
var sum = 10 + 10; // number
var difference = 10 - 5; // number
var product = 10 * 10; // number
var quotient = 10 / 2; // number
var remainder = 10 % 3; // number
console.log(remainder)


/*Escape sequence in strings
\n - new line
\t - tab
\\ - backslash
\' - single quote
\" - double quote
\b - backspace
\f - form feed
*/


//Length of string
var str = "Hello, World!";
var strlength = str.length; // 13
console.log(strlength)


//String methods
var str = "Hello, World!";
var strlength = str.length; // 13
var firstChar = str.charAt(0); // H
var lastChar = str.charAt(strlength - 1); // d
var firstWord = str.substring(0, 5); // Hello
var lastWord = str.substring(strlength - 5, strlength); // World


//Function declaration
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)) // 15

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store. " + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly")) // The big dog ran to the store. quickly    


//Arrays
var ourArray = ["John", 23];
var myArray = [["John", 23], ["cat", 2]];
console.log(myArray) // [ [ 'John', 23 ], [ 'cat', 2 ] ]
console.log(myArray[0][0]) // John

//push in array
var myArray = [50, 60, 70];
myArray.push(80); // [50, 60, 70, 80]

//pop in array
var myArray = [50, 60, 70];
var removedElement = myArray.pop(); // 70

//shift in array
var myArray = [50, 60, 70];
var removedElement = myArray.shift(); // 50

//unshift in array
var myArray = [50, 60, 70];
myArray.unshift(45); // [45, 50, 60, 70]]


//Reusable code with functions
function ourReusableFunction() {
    console.log("Hello, World!");
}
ourReusableFunction(); // Hello, World!
ourReusableFunction(); // Hello, World!

//Global Scope
var myGlobal = 10; // global variable
function fun1() {
    oopsGlobal = 5; // global variable
    var output = ""; // local variable
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal + "\n"; // 10
    }
}


//Local Scope
function fun2() {
    var output = ""; // local variable
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal + "\n"; // undefined
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal + "\n"; // 5
    }
}

// return
function timesFive(num) {
    return num * 5;
}

// Undefined value return
var sum = 0;
function addFive() {
    return sum + 5; // 10
}

// stand in line
function nextInLine(arr, item) {
    arr.push(item); // add item to the end of the array
    return arr.shift(); // remove the first item from the array
} // return the removed item
console.log(nextInLine([1, 2, 3, 4, 5], 6)) // 1

// Boolean values
function welcomeToBooleans() {
    return true; // true or false
}
console.log(welcomeToBooleans()) // true

// Conditional statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true!";
    } else {
        return "No, that was false!";
    }
}

console.log(trueOrFalse(true)) // Yes, that was true!
console.log(trueOrFalse(false)) // No, that was false!


// Equality
function testEqual(val) {
    if (val == 12) { // == is equality operator
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10)) // Not Equal


// Comparison with the strict Equality operator
function testStrict(val) {
    if (val === 7) { // === is strict equality operator
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(7)) // Equal
console.log(testStrict("7")) // Not Equal
console.log(testStrict(8)) // Not Equal


// Comparison with the strict Inequality operator
function testStrict(val) {
    if (val !== 7) { // !== is strict inequality operator
        return "Not Equal";
    }
    return "Equal";
}

// if else statement
function testElse(val) {
    if (val > 5) {
        return "Greater than 5";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Equal to 5";
    }
}

console.log(testElse(10)) // Greater than 5


// Switch statement
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "unknown";
            break;
    }

    return answer;
}

// Multiple identical options in switch statments
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1)) // Low


// Counting cards
function countCards(cards) {
    var count = 0;
    switch (cards) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }

    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;

}

// Objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quinny",
    "legs": 4,
    "tails": 1,
    "friends": []
};

console.log(myDog.name) // Quinny
console.log(myDog["name"]) // Quinny
console.log(myDog["legs"]) // 4
/* we have to use bracket notation if the name of the property contains a space.
we can update the existing properties
we can create new properties
we cam also delete the property*/

delete myDog.name; // delete the property name from myDog object

/* Objects can be used as dictionaries
and to store data in key-value pairs.
The key is the name of the property, and the value is the value of the property.*/


// Testing objects for properties
var myDog = {
    "name": "Quinny",
    "legs": 4,
    "tails": 1,
    "friends": []
};

function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("name")) // Quinny


// Manipulating complex objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "The Stranger",
        "release_year": 1977,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Pink Floyd",
        "title": "Dark Side of the Moon",
        "release_year": 1973,
        "formats": [
            "CD",
            "LP"
        ],
        "gold": false
    }

];


// Accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; // maps

// Accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1]; // pine


// Loops
//while loop

var myArray = [];

var i = 0;
while(i<=5) {
    myArray.push(i);
    i++;
}
console.log(myArray) // [0, 1, 2, 3, 4, 5]


//for loop
var myArray = [];

for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}
console.log(myArray) // [1, 2, 3, 4, 5]


//do while loop
var myArray = [];
var i = 0;
do {
    myArray.push(i);
    i++;
}
while (i < 5);

// Random Numbers

var random_num = Math.random(); //between 0 and 1

function generateRandomWholeNum() {
    return Math.floor(Math.random() * 31); // between 0 and 30
}