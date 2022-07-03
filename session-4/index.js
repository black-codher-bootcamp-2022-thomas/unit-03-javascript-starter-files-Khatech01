// ****************************************************TASK 1 - OBJECTS****************************************************

// const personA = {
//    name: 'Ahoua',
//    age: 25,
//    location: 'Coventry',
//    likes: 'decorating',
// };

// const personB = {
//     name: 'Laura',
//     age: 32,
//     location: 'France',
//     likes: 'painting',
//  };

//  const personC = {
//     name: 'Harold',
//     age: 22,
//     location: 'Paris',
//     likes: 'playing football',
//  };

//  const personD = {
//     name: 'Karl',
//     age: 52,
//     location: 'London',
//     likes: 'running',
//  };

//  function biography (person) {
// 1st way :  const {name, age, likes, location} = person

// 2nd way :
//    const name = person.name;
//    const age = person.age;
//    const location = person.location;
//    const likes = person.likes;

//     return (`Hi, my name is ${name}. I am ${age} years old, I live in ${location} and I like ${likes}.`);
//  }

// console.log(biography(personA))
// console.log(biography(personB))
// console.log(biography(personC))
// console.log(biography(personD))



// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
    // ***Uncomment the code below to begin the task***

    // const x = 6;
    // const y = 4;

    // const addition = x + y;
    // console.log("Addition: x + y " + addition);

    // const subtraction = x - y;
    // console.log("Subtraction: x - y " + subtraction);

    // const multiplication = x * y;
    // console.log("multiplication: x * y " + multiplication);

    // const division = x / y;
    // console.log("Division: x / y " + division);

    // const multipleX = x * x;
    // console.log("multipleX: x * x " + multipleX);

    // const additionXXY = x / y;
    // console.log("additionXXY: x / y " + additionXXY);

    // const multipXDiviY = x * y / y;
    // console.log("multipXDiviY: x * y / y " + multipXDiviY);


// ****************************************************TASK 3****************************************************

// const age = 30
// const minDrive = 16
// const canIdrive = age >= minDrive


// console.log('Are you old enough to drive?' + canIdrive)



// ****************************************************TASK 4****************************************************4
// function calculator(num1, num2) {
 
//     const addsUp = num1 + num2; 
//     const subs = num1 - num2;
//     const multi = num1 * num2;
//     const divid = num1 / num2;

//     return multi

// }

// console.log(calculator(15,10));


    const personA1 = {
    name: 'Ahoua',
    age: 25,
    location: 'Coventry',
    likes: 'decorating',
    };

    const personB1 = {
        name: 'Laura',
        age: 32,
        location: 'France',
        likes: 'painting',
    };

    const personC1 = {
        name: 'Harold',
        age: 22,
        location: 'Paris',
        likes: 'playing football',
    };

    const personD1 = {
        name: 'Karl',
        age: 52,
        location: 'London',
        likes: 'running',
    };
function whoIsOlder(personA, personB){

    let personAge1 = personA.age;
    let personName1 = personA.name;

    let personAge2 = personB.age;
    let personName2 = personB.name;

    
    // const isPerson1OlderThanPerson2 = personAge1 > personAge2;
    
    if(personAge1 > personAge2) {
        const yearsDiff = personAge1 - personAge2;
         return (`${personName1} is ${yearsDiff} years older than ${personName2}.`);
    }
    else {
        const yearsDiff1 = personAge2 -personAge1;
        return (`${personName2} is ${yearsDiff1} years older than ${personName1}.`);
    }

};
console.log(whoIsOlder(personA1, personB1));
console.log(whoIsOlder(personC1, personD1));