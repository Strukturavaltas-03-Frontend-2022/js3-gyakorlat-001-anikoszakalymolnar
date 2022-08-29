/* Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:
arrayToMap(array)
arrayToSet(array)
setToMap(set)
setToArray(set)
mapToArray(map)
mapToSet(map)
A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból
konvertálják át az adatokat egy másikba.
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object. */

const objectConverter = {
  arrayToMap(array) {
    return new Map(
      array.map((value, index) => [index, value]),
    );
  },

  arrayToSet(array) {
    return new Set(array);
  },

  setToMap(set) {
    const map = new Map();
    const array = [...set];
    array.forEach((value, index) => map.set(index, value));
    return map;
  },

  setToArray(set) {
    return [...set];
  },

  mapToArray(map) {
    const array = [];
    map.forEach((value, key) => array.push(value));
    return array;
  },

  mapToSet(map) {
    const set = new Set();
    map.forEach((value, key) => set.add(value));
    return set;
  },
};

export default objectConverter;
