//1. Use strict
//added in ES 5
//use this for Varina Javascript.
'use strict'

// 2. Variable (변수), rw(read/write)
//Let (added in ES6)
let globalName = 'global name'
{
    let name = 'iNa';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (din't ener use this!)
// var hoisting(move declaration from bottm to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Contants(한번 할당하면 값이 절대 바뀌지 않음), r(read only)
//use const whenever possible.
//only use let if variable need to change.
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: premitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//tyue: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value:${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text= 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);



