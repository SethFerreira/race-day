let raceNumber = Math.floor(Math.random() * 1000);
// Boolean values and age input affect behavior
const registeredEarly = false;
const runnerAge = 19;

if (runnerAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
    console.log(`Adult and registered early: #${raceNumber} 9:30am`);
} else if (runnerAge > 18 && registeredEarly === false) {
    console.log(`Adult and registered late: #${raceNumber} 11:00am`);
} else if (runnerAge < 18) {
    console.log(`Youth: #${raceNumber} 12:30pm`);
} else {
    console.log('See registration desk');
}