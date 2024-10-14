/*so datatypes are divided in two types depending on how thye are stored and accesssed in the
memory, the two types are primitive and non primitive 
-primiive datatypes (call by value)
total 7: string, number, boolean, null, undefined, symbol and bigint 

-non primitve(reference)/call by reference
arrays, objects, functions 

-javascript is dynamically typed language(you do not need to define the type of data type
it handles it on it's own during run time */

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);// false, see here even the values passed in symbol is same but it 
//makes them unique


//arrays, object and function 

const names = ["rahul", "varun", "inderjeet"]

let myObj = {
    //anything inside curly braces is object in js
    name : "sarthak",
    age : 18,
}

const firstFunction = function() {
    console.log("hello world");
    
}




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//memeory in js are of two types stack(primitive) and heap(non primitive)

let myname = "Sarthak"
let hisname = myname 
hisname = "vikram" 

console.log(myname, hisname);
//see here that in his name a copy of my name was shared that is why we have such result 

let userone = {
    email: "sarthak@gg.com",
    pass: "i wont tell you",
}

let usertwo = userone 

usertwo.email = "vikram@gg.com"

console.log(usertwo.email, userone.email);

//as this is non primtive datatype, a reference was passed and hence value changed in both 
