var planetList = [];
function createPlanet(name, coords, situation, satteliteList) {
    var planet = {
        name: name,
        coords: coords,
        situation: situation,
        satelliteList: satteliteList,
    };
    planetList.push(planet);
}
function updateStatus(planet, newSituation) {
    planet.situation = newSituation;
}
function addSattelite(planet, satellite) {
    if (planet.satelliteList.includes(satellite)) {
        throw new Error("This satellite already exist in this planet");
    }
    planet.satelliteList.push(satellite);
}
function removeSattelite(planet, satellite) {
    if (!planet.satelliteList.includes(satellite)) {
        throw new Error("This satellite don't exist in this planet");
    }
    var newSatteliteList = planet.satelliteList.filter(function (oneSattelite) { return oneSattelite != satellite; });
    planet.satelliteList = newSatteliteList;
}
function listAllPlanets() {
    planetList.forEach(function (planet) { return console.log(planet); });
}
