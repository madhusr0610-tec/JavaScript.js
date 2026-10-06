//Function: Re-usable code block; Unit of logic;

//1. Regular function:
//function < function>(parameter1, parameter2){
// logic
// return <return value>
//}

//Fibonacci number in function

// function fib(n){
//     if(n==1){
//         return 0;
//     }
// if(n==2)
// {
//     return 1;
// }
// return fib( n-1) + fib(n-2);
// }
// console.log(fib(5));

//2. Anonymous Function

// const f= function(x,y){
//     return x+y;
// }

// //3.Arrow Fnction

// const t=(x,y) => {
//     return x + y;
// }

// function raceCars([first, second, third, ...others]){
//     let message =`The race was a thrilling experience with
//                   ${first} finishing first,
//                   ${second} in second CaresPosition,
//                   ${third} in third Position, followed by `;
            
//                   if(others.length > 0){message +=`\n followed by \n`};

//                   for(let[index, car] of others.entries()){
//                     message += `\n followed by \n`
//                     if(index == others.length -1){
//                         message += `and then ${car} finishing last.`;
//                     }else{
//                         message += `${car},`;
//                     }
//                   }
//                   console.log(message);
// }

// let winners =['Lotus', 'BMW','Mercedes']
// let runner_ups = ["Mistubushi","Nissan", "Honda"];

// raceCars([...winners,...runner_ups]);
// raceCars(['Lotus','BMW','Mercedes','Mistubushi','Nissan','Honda']);


// Check for palindrome number

// function isPallindrome(num){
//     let last_digit, reverse=0;
//     while(num >0){
//         last_digit= num%10;
//         reverse= (reverse*10) + last_digit;
//         num = Math.floor(num/10);

//     }
//     return reverse;
// }
// function isPallindrome(num){
//     return num=== reverseNum(num);
// }

// console.log(isPallindrome(12345));

// Given 3 characters: 'a','b','c';
//Write a function to return all possible combinations of these characters

//Backtracking
function permutations(string, result =""){
    //let result =[];
    if(string.length === 0){
        console.log(result);
        return;
    }
    //Pick eachcharacter as first character
    for(let i= 0; i< string.length; i++){
        let char= string[i];
        let remaining= string.slice(0,1) + string.slice(i+1);
        //Recursion call
        permutations(remaining, result +char);
    }
}
permutations("abc");