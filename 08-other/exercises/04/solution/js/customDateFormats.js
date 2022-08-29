/* Írj egy függvényt customDateFormats néven, ami paraméterként egy Date objektumot kap,
a visszatérési értéke pedig egy objektum két tulajdonsággal, ami a következő formátumban
tartalmazza a paraméterként kapott dátumot:
short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul,
    kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő) */

function customDateFormats(Date = new Date()) {
  const monthNameShort = ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'];
  const monthNameLong = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];

  const shortStr = `${Date.getFullYear()}. ${monthNameShort[Date.getMonth()]} ${Date.getDate()}. `
        + `${Date.getHours() < 10 ? `0${Date.getHours()}` : Date.getHours()}:`
        + `${Date.getMinutes() < 10 ? `0${Date.getMinutes()}` : Date.getMinutes()}`;
  const longStr = `${Date.getFullYear()}. ${monthNameLong[Date.getMonth()]} ${Date.getDate()}. `
        + `${Date.toLocaleTimeString('hu')}`;

  return {
    short: shortStr,
    long: longStr,
  };
}

export default customDateFormats;
