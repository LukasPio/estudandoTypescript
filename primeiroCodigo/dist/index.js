function sendSoldierToBattle(name, captain) {
  var soldier = {
    name: name,
    captain: captain,
    lifePoints: 50,
    inMission: true,
  };
  alert("".concat(name, " was sent to mission commanded by ").concat(captain));
  return soldier;
}
function healOneSoldier(life, soldier) {
  if (life > soldier.lifePoints) {
    return new Error("You can't heal a soldier to have less life");
  }
  soldier.lifePoints += life;
  console.log(
    ""
      .concat(soldier.name, " was healed and now him lifePoints are ")
      .concat(soldier.lifePoints),
  );
}
var soldierName = prompt("Name of soldier to battle");
var soldierCaptain = prompt("Soldier's captain's name");
var soldier = sendSoldierToBattle(soldierName, soldierCaptain);
var heal = Number(
  prompt(
    "".concat(soldier.name, " was hurt how much of life do you want to heal?"),
  ),
);
healOneSoldier(heal, soldier);
