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
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

var houseKeeper1 = new HouseKeeper(5, "Marie", [
  "bedroom",
  "bathroom",
  "lobby",
]);

var houseKeeper2 = new HouseKeeper(2, "Jane", ["bedroom"]);

houseKeeper1.clean();

//* CONSTRUCTOR FUNCTION
function Audio(fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function () {
    // Tap into the audio hardware
    // Check the file at fileLocation exists
    // Check the file at fileLocation is a sound file
    // Play the file at fileLocation
  };
}

//* CALLBACK FUNCTION
function addAnotherEventListener(typeOfEvent, callback) {
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationKeypress: 2,
  };

  if (eventThatHappened.eventType == typeOfEvent) {
    callback(eventThatHappened);
  }
}
