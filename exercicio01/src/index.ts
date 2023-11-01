const spaceshipsList = [];

function newSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name: name,
    pilot: pilot,
    crewLimit: crewLimit,
    crew: [],
    inMission: false,
  };
  spaceshipsList.push(spaceship);
  return spaceship;
}

function newMemberInSpaceship(
  spaceship: { crew: [{}]; crewLimit: number },
  name: string,
  age: number,
  married: boolean,
) {
  if (spaceship.crew.length < spaceship.crewLimit) {
    let member: {} = {
      name: name,
      age: age,
      married: married,
    };
    spaceship.crew.push(member);
    return "success";
  }

  throw new Error("Crew limit can't be exceeded");
}

function sendSpaceshipToMission(spacechip: {
  crew: [{}];
  crewLimit: number;
  inMission: boolean;
}) {
  if (spacechip.inMission) {
    throw new Error("This spaceship already is in mission");
  }

  const requiredCapacity = Math.floor((1 / 3) * spacechip.crewLimit);
  if (spacechip.crew.length < requiredCapacity) {
    throw new Error(
      `This spaceship must has ${requiredCapacity} people to go into a mission`,
    );
  }

  spacechip.inMission = true;
}

function listAllShips() {
  spaceshipsList.forEach(
    (spaceship) => {
      console.log("------------------")
      console.log(spaceship)
    },
  );
}
