const guts = {
    name: 'guts',
    poinstOfLife: 60,
    dor: true
}

function attack(character: {name: string, poinstOfLife: number}, damage: number) {
    character.poinstOfLife -= damage
    console.log(`${character.name} was damaged and lost ${damage} points of life`)
}

attack(guts, 20)