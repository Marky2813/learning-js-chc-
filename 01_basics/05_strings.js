const name = "sarthak"
const learning = "JS" 

// console.log( name + learning); now this method of writing is outdated 

console.log(`hello my name is ${name} and I am learning ${learning}`);

//there is another way of declaring a string apart from the one we have been following 

const gameName = new String('templerun')

//js is case sensitive 

console.log(gameName.length);
console.log(gameName.__proto__);

//similarly in log you do gameName.anyprototype function (view from browser console)

console.log(gameName.charAt(5));
console.log(gameName.indexOf('e'));

const newstring = gameName.substring(0, 4)
console.log(newstring);
//diff btw substring and slice is that in slice you can add -ve and start from the back
const anotherstring = gameName.slice(-9, 5)
console.log(anotherstring);


//trim and replace in js 
const string1 = "   sarth   ak   "
console.log(string1.trim());//sarth  ak so string basically improves the spaces before and after


const string2 = "sarthak_narula"
console.log(string2.replace('_', '%'));

// similaerly there is one split function to seperate a string in an array on the basis of a seperator 




