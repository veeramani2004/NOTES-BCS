//Exercise
// 1. Wand Selection

//var wandCore = prompt("What is your wand core?");
//console.log(wandCore.toLowerCase());
//console.log(wandCore.toUpperCase());

//2.Age Spell

// var age = +prompt("Enter your age:");

// if (age >= 11) {
//   console.log("Welcome to Hogwarts! 🦉");
// }

//3.Convert Galleons to Knuts

// var galleons = +prompt("Enter Galleons:");
// var knuts = galleons * 493;
// console.log(`${galleons} Galleons = ${knuts} Knuts`);

//4.Secret Chamber Password Check

// var password = prompt("Speak the password:").toLowerCase().trim()
// if (password=="alohomora"){
//     console.log("Access granted to the Chamber of Secrets.")
// }else{
//     console.log("Incorrect password. 🐍")
// }

//5. Sorting Hat

// const traitHouses = {
//   bravery: "Gryffindor",
//   wisdom: "Ravenclaw",
//   loyalty: "Hufflepuff",
//   ambition: "Slytherin",
// };
// const trait = prompt("What quality do you value most?").toLocaleLowerCase();
// const house = traitHouses[trait] || "Squib";
// console.log(`You belong to ${house}`)


// 6.Who's Taller: Hagrid or Dobby?

// var HagridHeight = +prompt("Enter the hagrid height ?" )
// var DobbyHeight =+prompt("Enter the Dobby height ?")

// var differnce=Math.abs(HagridHeight-DobbyHeight)

// if(HagridHeight>DobbyHeight){
//     console.log(`Hagrid is taller than Dobby by ${differnce}`)
// }else if(HagridHeight==DobbyHeight){
//     console.log(`Both are the same height!`)
// }else{
//     console.log(`Dobby is taller than Hagrid by ${differnce}`)
// }


//7.Quidditch Score Calculator

// var goal = +prompt("Enter the Number of Goals?")
// var snitches =+prompt("Enter the Number of Snitches?")
// var TeamScore=(goal*10+snitches*150)
// if(TeamScore>=200){
//     console.log(`You scored ${TeamScore} points and won the match! 🧹🏆`)
// } else{
//     console.log(`You scored ${TeamScore} points. Better luck next time! `)
// }


//8.House Points Formatter

// console.log("Gryffindor".padStart(15));
// console.log("Ravenclaw".padStart(15));
// console.log("Hufflepuff".padStart(15));
// console.log("Slytherin".padStart(15));


// 9.Inventory Padlock

// var Number=+prompt("Ask for a Number between 1-5 ")
// if (Number==1||
//     Number==2||
//     Number==3||
//     Number==4||
//     Number==5
// ){
//      console.log(`Access to Vault ${Number} granted`)
// } else{
//     console.log("Invalid vault number")
// }

//10. Magical Echo

// var MagicalWord=("Expecto Patronum")
// console.log(MagicalWord .repeat(7));


//11. Broom Upgrade Cost

// var model =+prompt("Give a Model Name?")
// var price =+prompt("Give its Price?")

// var AfterTax=parseInt( price*(1+0.1))
//  console.log(`${model} will cost you ${AfterTax} Galleons (after tax).`)


//12.Wizarding Menu Case Fixer

// var item = prompt("Enter your order:").toLowerCase().trim();

// if(item=="butterbeer"||item=="pumpkin juice"){
//     console.log(`your order ${item} is available`)
// }

//13.Bug Fix:String Not Trimmed 

// var name="Hermione"
// console.log((name).toLowerCase().trim());


//14.Diagon Alley Store Hours

// var dayNumber=+prompt("give day number?")
//  var days = {
//     1:"monday",
//     2:"Tuesday",
//     3:"wednesday",
//     4:"Thursday",
//     5:"Friday",
//     6:"Saturday",
//     7:"sunday"
// }

// if(dayNumber>=1 && dayNumber<=6){
//     console.log(`It's ${days[dayNumber]}. Store is open!`)
// }else if(dayNumber===7){
//     console.log(`It's Sunday. Store is closed!`)
// }else{
//     console.log(`invalid number`)
// }


//15.Cauldron Temperature Check

// var temperature=+prompt("Give the Temperature in °C ? ")

// if(temperature<60){
//     console.log(`Temperature too cool`)
// }else if(temperature>100){
//     console.log(`Temperature too hot`)
// }


//16.Bug Fix:Area of Magic Circle

// var radius = +prompt("Enter radius:");
// var area = 3.14 * radius ** 2;
// console.log(area);

// Reason + converts string to number



//17.Predict Output: Logic Mix

// console.log((7 > 5 && 2 < 1) || 8 != 0);

// we first take (7 > 5 && 2 < 1) -> BODMAS 
//                (true && false) -> its is && oprater. any one fales its false
//next we take 8 != 0   --> its true
// finally ((7 > 5 && 2 < 1) || 8 != 0) --> (fales||true)
// in the case or oprater any one true its "True".


//18. DRY Refactor: Ingredient Stock Checker









//19.Spell Strength Evaluator

// var spell=+prompt("Enter the Spell Name?")
// var power=+prompt("Enter the its power?")

// if(power>=90){
//     console.log(`${spell} is Legendary spell`)
// }else if(power>=60 && power<=89){
//     console.log(`${spell} is an Advanced spell.`)
// }else{
//     console.log(`${spell} is an Basic spell.`)
// } 


//20. Final Task: Hogwarts ID Generato

// var name=prompt("Give your name?").trim().toLocaleLowerCase()
// console.log(`${name}@hogwarts.com`)


