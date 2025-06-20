// Task
// Enter person1 name: Muthu
// Enter person2 name: Abishek
// Muthu tell me your height in cm: 186
// Abishek tell me your height in cm: 165

// Muthu is taller than Abhishek by 21cm

var name1 = window.prompt("enter the person 1 name ");
var name2 = window.prompt("enter the person 2 name ");

var person1Height = +window.prompt(`${name1} enter person 1 height`);
var person2Height = +window.prompt(`${name2} enter person 2 height`);

var differnce = Math.abs(person1Height - person2Height);

if (person1Height < person2Height) {
  console.log(`${name1} is taller than ${name2} by ${differnce}`);
} else if (person1Height == person2Height) {
  console.log(`${name1} and ${name2} both are same height `);
} else{

 console.log(`${name2} is taller than ${name1} by ${differnce}`);

}
