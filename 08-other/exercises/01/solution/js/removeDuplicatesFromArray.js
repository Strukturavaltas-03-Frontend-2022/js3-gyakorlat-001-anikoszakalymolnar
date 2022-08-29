/* 1. Írj egy függvény kifejezést `removeDuplicatesFromArray` néven, ami a paraméterként megadott
tömbből eltávolítja a duplikált elemeket! A tömb csak primítív értékeket tartalmaz!
A függvény visszatérési értéke a duplikált elemektől mentes új tömb! */

/* function removeDuplicatesFromArray(array) {
    const setData = new Set();
    for (const elem of array) {
      setData.add(elem);
    }
    const uniqueArray = [...setData];
    return uniqueArray;
  } */

const removeDuplicatesFromArray = (array) => {
  const setData = new Set();
  array.forEach((element) => setData.add(element));
  return [...setData];
};

export default removeDuplicatesFromArray;
