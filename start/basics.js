

// létrehozzuk a 'szam' változót és értéket is adunk neki
// változó létrehozása: deklarálás
// érték adás: value assignment
let szam = 9;

// value assignment
// a bal oldalon lévő változóba bele töltődik a jobb oldalon lévő érték
szam = 20;

// csak deklarálás történik
let myNumber;
// deklarálni három kulcsszóval lehet
var a; //nem használjuk
let b; //let-et akkor használjuk, ha később a változó értékét módosítani akarjuk
const c = 10; //akkor használjuk, ha nem akarjuk módosítani az értékét a változónak
//const pi = 3.14;
//pi = 3; //böngésző hibaüzenet
//let b = 4; //újra deklarálni nem lehet, csak értéket adni neki

// szám: nincs körülötte aposztrof
a = 10;
b = 9;
console.log(a + b);

// string típusú változó: szöveg
let szoveg = 'hello';

console.log(szoveg.toUpperCase);


// tömb:
const myArray = [3, 'hello', a, ['a', 'b']];

console.log(myArray);

// a bömböt nullától indexeljük
console.log(myArray[0]);
// a 4 elemű tömb utolsó eleme 3. lenne, a 4. nem létezik
console.log(myArray[4]);

// logikai érték (boolean), true vagy false lehet az értéke
let kapcsolo = true;

