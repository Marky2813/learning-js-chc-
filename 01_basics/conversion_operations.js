// let score = 33

// console.log(typeof score);

// let ChangeThisToNum = Number(score)

// console.log(typeof ChangeThisToNum);
// console.log(ChangeThisToNum);


/* 
conversion karne ke liye RHS mei datatype ko capital se start karke paranthesis mei name of var 
which needs to be converted
"33"=>33
"23ded"=> you can convert this to nmumber but it's value will be NaN which stands for notanumber
true=>1 and false->0
*/

let age = true 

console.log(typeof age);

let changeB = String(age)
console.log(typeof changeB);
console.log(changeB);
 /* if you take a number and then convert it to boolean, the output will be true unless the 
 number is anything less than zero. and if you convert string to boolean 
 "" => 0
 "anything" => 1.
 similarly, we can convert boolean to string and even number to string 
  */



 //**************************operations**************************
 
// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2%3);
// console.log(2/3);


let str1 = "hello"
let str2 = " hitesh"
console.log(str1+str2);
console.log(1+"2");//12
console.log("1"+2);//12
console.log("1"+2+2);//122
console.log(1+2+"3");//33

/* 
abh i know this gets really confusing so let us just understand this.
so see the thing is that, such code is used only for questions and not in real life 
life applications. the programming we will be doing will not include all this. and here 
understand that if we use string first it considers others as string and if we use addition first
then it first adds and then strings 
*/


/* postfix and prefix increment and decrement operators, post fix waale before the operation
gives the value to the lhs and then increments, prefix waale first increments and then 
transfer the value to the lhs*/


// console.log("2">1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>=1);
//these above are fairly simple but see the next one, that is where the things get interesting 

console.log(null>0);//false
console.log(null==0);//false 
console.log(null>=0);//true 
/* 
*/
