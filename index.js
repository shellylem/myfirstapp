// comments
;
// let defines a variable
// variable names are CASE sensitive!
// variable names cannot start with a number
// cannot contain a space or hyphen
//
// const defines a constant
;
let name = 'shelly';   //  string literal
const interestRate =1.5;   //  number literal
let isApproved = true ; //  boolean literal
let lastName = undefined ;// undefined literal
let firstName = null; //  null literal (also an object)
// 
// object reference type (combine closely related items)
//
let person  =  {
    name: 'meko',
    age:5
};
// dot notaion
person.name = 'harley';
//  bracket notation
person['name'] = 'chester'
//  java is a dynamic language 
//  so literals can change type!
name = 1;  // name is now a number literal!
//
//  where bracket notation is usefule
//
let selection = 'name';
person[selection] = 'gizmo';
//
// array reference type
let colourlist = ['red','blue'];
colourlist[3] = 'green';
//
// funciton reference type
//
function greet(name)
{
    console.log('hello ' + name);
}
function square(number)
{ return number * number;
}
let number = square(2);
//  name is called the parameter
//  mermaid is the called the arguement
//    arguement is the actual value supplied to parameter
greet('mermaid');
console.log(name);
console.log('hello world');
console.log(person);
console.log(person['name']);
console.log(colourlist);
console.log(colourlist[0]);
console.log('value of square is ' + number);
console.log('value of square is ' + square(4));