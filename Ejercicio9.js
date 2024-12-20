/* Ejercicio 9
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.*/

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {

  let oldest = xMen[0];
  for (let i = 1; i < xMen.length; i++) {
    const currentXMen = xMen[i];
    if (currentXMen.year < oldest.year) {
      oldest = currentXMen;
    }
  }
  return oldest;
}

const oldestXMen = findOldestXMen(xMen);
console.log(`El X-Men más antiguo es ${oldestXMen.name} que apareció en ${oldestXMen.year}.`);