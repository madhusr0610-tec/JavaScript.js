//Arthimetic operatiors
//+,-,*,/

//% - modulus
//** exponentiation 

//2.Assignment operators

//= |x = 10| Assign
//+= |x+ = 5| Increament by given value
//-= |x-= 5| Decrement by given value
// Similarly *=, /=,%=, **==

//Increment/Decrement Operators
//++, --
// Pre-increment/decrement-> Inc/Dec happens before execution of statement
// For eg:
let x=10;
console.log(++x);


//3. Comparison Operators
  // ==  | Equal value
  // === | Equal value and type
  // !=  | Not equal value
  // >,<,<=,>=

// 4.Logical Operators
//AND -> &&
let age=20;
let haslicense = true;

console.log(age >= 18 && haslicense)
// OR -> ||
// NOT-> !

// 5. Bitwise Operators
  //& -> AND
  //| -> OR
  //^ -> XOR
  //~ -> NOT TIL-duh
  //<< -> Left Shift
  //>> -> Right Shift
  //>>>> -> Zero-fill right shift

// 6. Membership Operators
let users= {'raj': 20,
            'Kumar':30, 
            'Kiran':40 };
console.log("Raj" in users);

//7. Instanceof Operators
class Student{}

const student= new Student();

console.log(student instanceof Student);


//8. Teenary Operators
// Deciding between 2 values for one  variable
//syntax
// const <variable> = <condition>? <expr1> : <expr2>;
const num= 10 >2? 5:10;
console.log(num);
//num is 5

//9. Nullish Coalescing Opreator

let username = null;
console.log('Hi ${username ?? "Guest"}, welcome to our website.... ')

//10. Optional chaining Operator

let user = {
  'name': "Arun",
  'age' : 20,
}

console.log(user.phone?.work);