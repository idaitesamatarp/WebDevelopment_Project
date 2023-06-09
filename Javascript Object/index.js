//* BEFORE USED CONSTRUCTOR
// var houseKeeper1 = {
//     yearsOfExperience: 5,
//     name: "Marie",
//     cleaningExperience: ['bedroom', 'bathroom', 'lobby']
// }

//* AFTER USED CONSTRUCTOR
function HouseKeeper(yearsOfExperience, name, cleaningExperience) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningExperience = cleaningExperience;
}

var houseKeeper1 = new HouseKeeper(5, "Marie", [
  "bedroom",
  "bathroom",
  "lobby",
]);

var houseKeeper2 = new HouseKeeper(2, "Jane", ["bedroom"]);
