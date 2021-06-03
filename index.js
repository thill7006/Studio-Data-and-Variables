// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:

const input = require('readline-sync');

let date = "Monday 2019-03-18";
let time = "10:05:34 PM";
let astronautCount = Number(input.question("How many astronauts? ")); 
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear"; 
// Write code to generate the LC04 report here:
const dashes = "-------------------------------------";
const empty = "                                      ";
console.log(dashes);
console.log("> LC04 - LAUNCH CHECKLIST            ");
console.log(dashes);
console.log("* Date: " + date);
console.log("* Time: " + time);
console.log(empty);
console.log(dashes);
console.log("> ASTRONAUT INFO            ");
console.log(dashes);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log(empty);
console.log(dashes);
console.log("> FUEL DATA            ");
console.log(dashes);
console.log("* Fuel temp celsius: " + fuelTempCelsius);
console.log("* Fuel level: " + fuelLevel);
console.log(empty);
console.log(dashes);
console.log("> MASS DATA            ");
console.log(dashes);
console.log("* Crew mass: " + crewMassKg);
console.log("* Fuel mass: " + fuelMassKg);
console.log("* Shuttle mass: " + shuttleMassKg);
console.log("* Total mass: " + totalMassKg);
console.log(empty);
console.log(dashes);
console.log("> FLIGHT PLAN            ");
console.log(dashes);
console.log("* weather: " + weatherStatus);
console.log(empty);
console.log(dashes);
console.log("> OVERALL STATUS            ");
console.log(dashes);
console.log("* Clear for takeoff:  YES");
// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.