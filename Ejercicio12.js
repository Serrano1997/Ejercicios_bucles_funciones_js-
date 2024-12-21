/*Ejercicio 12
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.*/


const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  let foundMutants = [];
  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      foundMutants.push(mutants[i].name);
    }
  }
  if (foundMutants.length > 0) {
    return `Se encontraron los siguientes mutantes con el poder "${power}": ${foundMutants.join(', ')}.`;
  } else {
    return `No se encontraron mutantes con el poder "${power}".`;
  }
}
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'flight'));
