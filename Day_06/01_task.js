//Task 1

// function moodReport(emoji = "😢", timeOfTheDay = "evening") {
//   const mood = `Feeling ${emoji} this ${timeOfTheDay}`;
//   return mood;
// }

// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));

//Task 1.2

// function checkAgeCategory(age = 18) {
//   if (age<18) {
//     return("🧒 Minor");
//   } else if (age<60) {
//     return("👨 Adult");
//   } else if(age>60) {
//     return("🧓 Senior")
//   }
// }

// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));

// Task 1.3
// function introduceWizard(){
// const wizard = {
//   name: "Merlin",
//   title: "Archmage",
//   wand: { core: "Phoenix Feather" },
//   return wizard
// };

// console.log(introduceWizard(wizard));

function whereAreYou(
  { user = "someone" },
  { city = "unknown", planet = "earth" }
) {
  return whereAreYou;
}

console.log(
  whereAreYou({
    user: "Thor",
    location: { city: "Asgard", planet: "Yggdrasil" },
  })
);
console.log(whereAreYou({}));
