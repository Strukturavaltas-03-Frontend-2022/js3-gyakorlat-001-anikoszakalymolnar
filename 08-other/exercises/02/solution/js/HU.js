/* Készíts egy HU nevű objektumot, aminek az alábbi propertijei vannak:
date(): Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
currency(): Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően
a Ft végződéssel együtt
list(): A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második
és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)
 */

const HU = {
  date(date) {
    return new Intl.DateTimeFormat('hu-Hu').format(date);
  },
  currency(number) {
    const huCurrency = new Intl.NumberFormat('hu-Hu', {
      style: 'currency',
      currency: 'HUF',
    });
    return huCurrency.format(number);
  },
  list(array) {
    let str = array[0];
    for (let i = 1; i < array.length - 1; i += 1) {
      str += `, ${array[i]}`;
    }
    str += ` és ${array[array.length - 1]}`;
    return str;
  },

};

export default HU;
