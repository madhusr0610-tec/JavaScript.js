// In programming, objects are utilized to represent Entities
// Entities are any tangible or intangible, distinct object, person, place.
// Concept oe even an event, about which data can be stored and managed in a database.
// Example: Student, Employeee, Department, Bank Account, Transcrition etc.
//
//Lets llot at some
// JavaScript allows u to create objects in different ways 
//Lets llot at some

//1.Object Literal
// Using the literal syntax of objects to directly from the key value parts.

//  const student1 = {
//     id : 3124,
//     firstName: "Roy",
//     lastName : "Kapoor",
//     location : "BLR"
//  }
// console.log("student1");

// // Accessing individual values
// console.log(`The student of id:${student1.id} is ${student1.firstName}`);



//2. Object Construction
// Constructing a generic, empty object using Object constructor;

const student2 = new Object();

student2.id = 1234;
student2.firstName = "Kiran";
student2.lastName = "John";
student2.location = "HYD";

console.log(student2);

console.log(`The student of id:${student2.id} is ${student2.firstName}`);

// 3. Using ES6 class syntax
// For blueprinting the  scheme for all objects belonging to same entity type

class student {
   constructor(id, fname,lname, location = "BLR"){
      this.id = id;
      this.firstName = fname;
      this.lastName = lname;
      this.location = location;
   }
   fullName(){
      return `${this.firstName}${this.lastName}`;   
   }
}
       

// Deliberately leaving out value for location parameter so that it will assume the defalut value

const student3 = new Student(41234, "Rajeev","Khanna");
console.log(student3);
console.log(`The student of id : ${student3.id} is ${student3.firstName}`);

