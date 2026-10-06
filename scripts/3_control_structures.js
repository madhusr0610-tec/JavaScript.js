// // Control Structures-> Programming paradigms which controls flow of execution

// //1.Conditions
// //i. if
// const AGE_LIMIT =18;

// let age=20;
// if(age>=AGE_LIMIT){
//     console.log("Yeah, you can drive");
// }

// //ii. if ...else

//     let userAuthenticated = true;

//     if (userAuthenticated){
//         console.log("Welcome to your profile");
//     }
//     else{
//         console.log("Please login to continue.....");
//     }

// //iii. else if

// const heavy_driving_age_limit = 20;
//  age = 30;

//  if(age>= heavy_driving_age_limit){
//     console.log("You can drive a trucks");
//  }else if(age>= AGE_LIMIT){
//     console.log("You can drive cars");
//  } else{
//     consolelog("You can ride cycle");
//  }

//  //iv. Nested if
//  let age =30;
//  let haslicense= 30;

//  if (age>=18){
//     if (haslicense){
//         console.log("You can drive a car.");
//     }else{
//         console.log("You need to get a license.")
//     }else{
//         console.log('You can drive in $(18-age)years.');
//     }
//  }
//  //simplifying the above, we can also write
//  if(age>=18 && haslicense){
//     console.log("You can drive.");
//  }

// //Falsy values
// // 1.false
// // 2.0
// // 3.-0
// // 4.0n
// // 5.""
// // 6.null
// // 7.undefined
// // 8.NaN

// //v. switch - matching one variable against multiple fixed values
// let menu =`
// Welcome
// 1.Balance
// 2.Data
// 3.Recharge
// 0.Exit
// `

// let choice = prompt(menu);
// let balance = 20;
// let data_balance = 200;
// choice= Number(choice);

// switch(choice){
//     case 1:
//             console.log(`You have Rs.${balance} in your talktime.`);
//             break;
//     case 2:
//             console.log(`You have ${data_balance}MB left.`);
//             break;
//     case 3:
//             console.log(`Please go to the nearest store.`);
//             break;
//     case 0:
//             console.log("Thank you for visiting us.\n Bye");
//             break;
//     default:
//            console.log("Check you input.")
// }

//2. Loops - Repeated Execution of Code block, sequence of iternation
// for loop
// for(expr1; terminating; increment/decrement){
//code block
//}

//expr1 :> Executes once before first iterantion
//- Usually used for counter variable initialization

//ternimation(exp2) :> Evaluated before started each iterantion
//- Usually used for checking termation condition

// exp3:> Executed after each iteration.
// - Usaully used for increment/decrement on counter variable

//printing 1 -5
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// for(let i=1; ; ){
//     console.log(i++);
//     if(i> 5){
//         break;
//     }
// }



// for(let i=1; i<=5; i++){
//     console.log('*'.repeat(i));
// }
// *
// * *
// * * *
// * * * *
// * * * * *

// for( let i= 1;i<=5; i++){
//     row="";
//     for( let j=1; j<=1; j++){
//         row+= "* ";
//     }
//     console.log(row);
// }

//      *
//    * *
//  * * *
//* * * *

// for (let i = 1; i <= 4; i++) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= 4 - i; j++) {
//         row += "  ";
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("  ".repeat(5 - i) + "* ".repeat(i));
// }

//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * *

// for (let i = 1; i <= 5; i++) {
//     console.log(" ".repeat(5 - i) + "* ".repeat(i));
// }
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * *

// only space diiference in console.log(" ".repeat(5 - i) + "* ".repeat(i));


// let n = 5;

// for (let i = 1; i <= 2 * n - 1; i++) {
//     let stars = i <= n ? i : 2 * n - i;
//     let spaces = n - stars;

//     console.log(" ".repeat(spaces) + "* ".repeat(stars));
// }

// for(let row=1; row<10; row++){
//     if(row<5){
//         console.log(" ".repeat(5-row)+ "* ".repeat(row));
//     }
//     else{
//         console.log(" ".repeat(row-5)+ "* ".repeat(10-row));

//     }
// }

// const students=['abhay', 'sujay','vijay']
// students.push("siraj");
// console.log(students);

//print all students with serial numbers along sides
// for(let i=0; i< students.length; i++){
//     console.log(`${i + 1} - ${students[i]}`);
// }


// for(let student of students){
//     console.log(student);
// }

// for (let[student_index, student] of students.entries()){
//     console.log(`${student_index +1}-${student}`);
// }

// for(let student_index in students){
//     console.log(`${parseInt(student_index) +1} -${students[student_index]}`);
// }

// 3. while Loop
// while(truth_value){
//     code body 
//               }

// do while loop
//do{
// body of the code }
// while(truth_value);


// let i=1;
// while (i<=10){
//     console.log(i++);
// }

// let students=[ 'akash','prakash','prabhas']

// while(students.length !=0){
//     console.log(students.pop());
// }

//Find the factorial

// let [fact,n]=[1,'5'];
// console.log(typeof n);
// while(n>1){
//     fact *=n--;// fact = fact * n; n = n-1;
// }
// console.log(typeof n);
// console.log(fact);

// Destructuring of an array, means taking 2 var with 2 value.

//Implicite type caste


//Fibonacci series
//0,1,1,2,3,5,8,13,21,34,55,.......
//fib(n)= fib(n-1) +fib(n-2);
// let n=5;
// let[first,second]=[0,1];
// let result;
// for(let count=0; count< 5; count++){
//     console.log(first);
//     result= first;
//     let next = first+second;

//     first= second;
//     second = next;
// }
// console.log(result);

//3. Exception Handling: Execution of risky code block expecting exception

function withdrawMoney(balance,amount){
    // Code block
    try{
        // Risky code block
        if(amount<=0){
            throw new Error("Amount must be greater than zero. ")
        }
        if(amount > balance){
            throw new Error("Insufficient Balance.");
        }
        balance -= amount;
        console.log(`Your withdrawal of Rs.${amount} was successful. Balance is Rs.>${balance}`);
    }
    catch (err)
{
    // error handling
    console.log(`Transaction completed! ${err}`);
}
finally{
    // clean-up
    console.log("Thank you!!!")
}
}
withdrawMoney(balance=2000, amount=3000);

