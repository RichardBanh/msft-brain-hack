export function randomWhole(x, y) {
  const random = Math.floor(Math.random() * (+x - +y)) + +y;
  return random;
}

export function isolatingStrings(object) {
  const emptyArray = [];
  for (let [key, value] of Object.entries(object)) {
    emptyArray.push(value);
  }
  return emptyArray
}
