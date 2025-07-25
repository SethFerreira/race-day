let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 18;

if (runnerAge > 18 && registeredEarly === false) {
    raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
    console.log(`Runner #${raceNumber} 9:30am`);
} else if (runnerAge > 18 && registeredEarly === false) {
    console.log(`Runner #${raceNumber} 11:00am`);
} else if (runnerAge < 18) {
    console.log(`Runner #${raceNumber} 12:30pm`);
} else {
    console.log('See registration desk');
}