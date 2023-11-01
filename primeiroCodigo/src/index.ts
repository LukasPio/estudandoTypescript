function sendSoldierToBattle(name: string, captain: string) {
  const soldier = {
    name: name,
    captain: captain,
    lifePoints: 50,
    inMission: true,
  };

  alert(`${name} was sent to mission commanded by ${captain}`);
  return soldier;
}

function healOneSoldier(
  life: number,
  soldier: { name: string; lifePoints: number },
) {
  if (life > soldier.lifePoints) {
    return new Error("You can't heal a soldier to have less life");
  }

  soldier.lifePoints += life;
  console.log(
    `${soldier.name} was healed and now him lifePoints are ${soldier.lifePoints}`,
  );
}

const soldierName = prompt("Name of soldier to battle");
const soldierCaptain = prompt("Soldier's captain's name");

const soldier = sendSoldierToBattle(soldierName, soldierCaptain);

const heal = Number(
  prompt(`${soldier.name} was hurt how much of life do you want to heal?`),
);

healOneSoldier(heal, soldier);
