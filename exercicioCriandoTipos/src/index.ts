type coordTupla = [number, number, number, number];
type planetSituation =
  | "habitable"
  | "uninhabitable"
  | "inhabited"
  | "unexplored";

type Planet = {
  name: string;
  coords: coordTupla;
  situation: planetSituation;
  satelliteList: string[];
};

const planetList: Planet[] = [];

function createPlanet(
  name: string,
  coords: coordTupla,
  situation: planetSituation,
  satteliteList: string[],
) {
  const planet: Planet = {
    name: name,
    coords: coords,
    situation: situation,
    satelliteList: satteliteList,
  };
  planetList.push(planet);
}

function updateStatus(planet: Planet, newSituation: planetSituation) {
  planet.situation = newSituation;
}

function addSattelite(planet: Planet, satellite: string) {
  if (planet.satelliteList.includes(satellite)) {
    throw new Error("This satellite already exist in this planet");
  }
  planet.satelliteList.push(satellite);
}

function removeSattelite(planet: Planet, satellite: string) {
  if (!planet.satelliteList.includes(satellite)) {
    throw new Error("This satellite don't exist in this planet");
  }
  const newSatteliteList: string[] = planet.satelliteList.filter(
    (oneSattelite) => oneSattelite != satellite,
  );
  planet.satelliteList = newSatteliteList;
}

function listAllPlanets() {
  planetList.forEach((planet) => console.log(planet));
}
