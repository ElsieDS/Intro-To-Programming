//Challenge 1 & 2

var randomBodyParts = ["Ears", "Eyes", "Nostrils"];
var randomAdjectives = ["Yucky", "Ugly", "Silly"];
var randomAnimals = ["Frog", "Worm", "Llama", "Crocodile", "Warthog"];
var randomAnimalBodyParts = ["Leg", "Horn", "Backside", "Toes"]

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
var randomAnimalBodyPart = randomAnimalBodyParts [Math.floor(Math.random() * 4)];
var randomInsult = "Your " + randomBodyPart + " is more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalBodyPart + "!!";

randomInsult;


//Challenge 3

var randomBodyParts = ["Ears", "Eyes", "Nostrils"];
var randomAdjectives = ["Yucky", "Ugly", "Silly"];
var randomAnimals = ["Frog", "Worm", "Llama", "Crocodile", "Warthog"];
var randomAnimalBodyParts = ["Leg", "Horn", "Backside", "Toes"]

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
var randomAnimalBodyPart = randomAnimalBodyParts [Math.floor(Math.random() * 4)];
var randomInsult = ["Your", randomBodyPart, "is more", randomAdjective, "than a", randomAnimal, "'s", randomAnimalBodyPart, "!!"].join(" ")

randomInsult;


//Challenge 4

var a = [3, 2, 1];
var joined = a.join(" > ");
joined;
