var spaceshipsList = [];
function newSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false,
    };
    spaceshipsList.push(spaceship);
    return spaceship;
}
function newMemberInSpaceship(spaceship, name, age, married) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        var member = {
            name: name,
            age: age,
            married: married,
        };
        spaceship.crew.push(member);
        return "success";
    }
    throw new Error("Crew limit can't be exceeded");
}
function sendSpaceshipToMission(spacechip) {
    if (spacechip.inMission) {
        throw new Error("This spaceship already is in mission");
    }
    var requiredCapacity = Math.floor((1 / 3) * spacechip.crewLimit);
    if (spacechip.crew.length < requiredCapacity) {
        throw new Error("This spaceship must has ".concat(requiredCapacity, " people to go into a mission"));
    }
    spacechip.inMission = true;
}
function listAllShips() {
    spaceshipsList.forEach(function (spaceship) {
        console.log("------------------");
        console.log(spaceship);
    });
}

const spaceship = newSpaceship("Geladeira", "Sr. tomate", 4)
const spaceship2 = newSpaceship("Fogão", "Sra. Panela", 10)
const spaceship3 = newSpaceship("Notebook", "Placa mãe", 6)

newMemberInSpaceship(spaceship, "Lucas", 16, false)
newMemberInSpaceship(spaceship2, "Lucas", 16, false)
newMemberInSpaceship(spaceship3, "Guts", 21, false)
newMemberInSpaceship(spaceship3, "Grithfin", 20, false)
newMemberInSpaceship(spaceship3, "Hog rider", 70, true)

sendSpaceshipToMission(spaceship)
sendSpaceshipToMission(spaceship3)


listAllShips()