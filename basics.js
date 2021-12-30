// number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

// object
let obj = {
  name: 'iNa',
  age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log(obj.name);
console.log(obj2.name);

//let 은 값의 변경이 가능하지만 const는 값의 변경이 불가능하다


