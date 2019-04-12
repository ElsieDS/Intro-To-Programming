
//Exercise

var name = "elsie";
if (name === "elsie"){
    console.log("Hello me!")}
        else {console.log("Hello stranger!")
    }


    //Part 1 of assigment

    var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];


    var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

    for (var i = 0; i < animals.length; i++) {
        animals[i] = "Awesome " + animals[i];
        alert(animals);
    }

//Part 2 of assignment

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = ""

while (randomString.length < 6) {
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    var randomChar = alphabet[randomIndex];

randomString += randomChar;
}
alert(randomString)



//Part 3 of assignment

var input = "javascript is awesome";
var output = "";

for (x = 0; x < input.length; x++){
    if (input[x] == "a") {
        output += "4"
    }
    else if (input[x] == "e") {
        output += "3"
    }
    else if (input[x] == "i"){
        output += "1"
    }
    else if (input[x] == "o"){
        output += "0"
    }
    else {output += input[x]
    }
}
console.log(output)

for (x=0; x < input.length; X++){
    if (input[x] == "a"){
        output += "4"
    }
}