let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 19;

if (runnerAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
    console.log(`Runner #${raceNumber} 9:30am`)
}