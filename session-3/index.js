// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
// console.log(document.body.parentNode)
// console.log(document.getElementById ('description'))
// console.log(document.getElementsByClassName('.about'))

const name = 'Tanya';
let age = 10;

let a = 5;
let b = 10;
console.log("Result 1: " + (a + b));

 a = 5;
 b = 10;
const c = a + b;
console.log("Result 2 " +c);


// Bonus
var container = document.getElementsByClassName('.container')

// Functions
function sayHey () {
    console.log("Hey!")
}

function conversation(){
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation()    


//MULTIPLE PARAMETERS
// Name and Age are declared in line 38 no need to declare again an identifier for name and age in line below 38/40
// example: function futureAge (name, age){
    // let name = 
    // let age = 
function futureAge (name, age){
        const ageIn5years = age + 5;
            return "Hi " + name + " ! " + "You will " + ageIn5years + " years old in 5 years";
        }
    
console.log(futureAge('Helene',20));
