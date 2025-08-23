//  EX:1
// Create an arrow function that adds two numbers
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(5, 3));
// console.log(add(10, 7));

// EX:2
// const greetUser = (name) => {
//   // Your code here - use template literals with backticks
//   return `Hello, ${name}!`;
// };

// console.log(greetUser("Alice"));
// console.log(greetUser("Bob"));

// EX:3
// const user1 = { name: "Alice", age: 25 };
// const user2 = { name: "Bob" };
// const user3 = null;

// // ===== YOUR CODE BELOW =====
// // Create a function that safely gets a user's age
// const getUserAge = (user) => {
//   return user?.age;
// };

// console.log(getUserAge(user1));
// console.log(getUserAge(user2));
// console.log(getUserAge(user3));

// EX: 4
// const settings1 = { theme: "dark" };
// const settings2 = { theme: null };
// const settings3 = { theme: undefined };
// const settings4 = {};

// // ===== YOUR CODE BELOW =====
// // Create a function that gets theme with a default value
// const getTheme = (settings) => {
//   return settings.theme ?? "light";
// };

// console.log(getTheme(settings1));
// console.log(getTheme(settings2));
// console.log(getTheme(settings3));
// console.log(getTheme(settings4));

// EX:5

// const userData = {
//   user: {
//     profile: {
//       name: "Alice",
//       age: null,
//     },
//   },
// };

// const userWithAge = { user: { profile: { age: 25 } } };
// const userWithoutProfile = { user: {} };

// // ===== YOUR CODE BELOW =====
// // Write a function that safely returns the user's age or a default message
// const getUserAge = (data) => {
//   return data.user?.profile?.age ?? "Age not defined";
// };

// console.log(getUserAge(userData));
// console.log(getUserAge(userWithAge));
// console.log(getUserAge(userWithoutProfile));

// EX:6

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 700 },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that calculates the total price of all products
// const getTotalPrice = (products) => {
//   // Your code here
//   return products.reduce((acc, crr) => acc + crr.price, 0);
// };

// console.log(getTotalPrice(products));

// EX:7

// const user1 = { name: "Jane", active: true };
// const user2 = { name: "John", active: false };
// const user3 = { name: "Alice", active: null };

// // ===== YOUR CODE BELOW =====
// // Write a function that returns a message indicating if the user is active
// const getUserStatus = (user) => {
//   return `${user.name} is currently ${
//     user.active == true ? "active " : "inactive"
//   }  `;
// };

// console.log(getUserStatus(user1));
// console.log(getUserStatus(user2));
// console.log(getUserStatus(user3));

// EX:8

// // Create a function that returns a greeting message based on time of day
// const greet = (name) => {
//   // Your code here - use Date methods to determine the current hour
//   // Morning: 0-11, Afternoon: 12-17, Evening: 18-23
//   const time = new Date().getHours();
//   return time <= 11
//     ? `Good Morning,${name}!`
//     : time <= 17
//     ? `Good Afternoon, ${name}!`
//     : `Good Evening,${name}!`;
// };

// // Test with different times
// console.log(greet("Alice"));

// EX:9
// const person = { name: "Alice", age: 30, city: "New York" };

// // ===== YOUR CODE BELOW =====
// // Use object destructuring to extract name and age
// const extractPersonInfo = (person) => {
//   // Your code here - use destructuring
//   const { name, age, city } = person;

//   return `${name} is ${age} years old`;
// };

// console.log(extractPersonInfo(person));

// EX:10
// const colors = ["red", "green", "blue", "yellow"];
// const coordinates = [10, 20];

// // ===== YOUR CODE BELOW =====
// // Use array destructuring to extract first two colors
// const getFirstTwoColors = (colors) => {
//   const [first, second, third, fourth, fifth] = colors;
//   return `First: ${first}, Second: ${second}`;
// };

// console.log(getFirstTwoColors(colors));

/// EX:11
// const fruits = ["apple", "banana"];
// const vegetables = ["carrot", "broccoli"];

// // ===== YOUR CODE BELOW =====
// // Use spread operator to combine arrays
// const combineArrays = (arr1, arr2) => {
//   return [...arr1, ...arr2];
// };

// console.log(JSON.stringify(combineArrays(fruits, vegetables)));

/// EX:12
// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },
// };

// const userWithoutSettings = { id: 2, name: "Adam" };

// // ===== YOUR CODE BELOW =====
// // Write a function that extracts the user's name and theme with default values
// const getUserSettings = (user) => {
//   const {
//     id,
//     name,
//     settings: { theme },
//   } = userProfile;
//   return `${name} prefers the ${theme} theme`;
// };

// console.log(getUserSettings(userProfile));
// console.log(getUserSettings(userWithoutSettings));

/// EX:13

// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     position: "Developer",
//     skills: ["JavaScript", "React"],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     position: "Manager",
//     skills: ["Leadership", "Communication"],
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     position: "CEO",
//     skills: ["Strategy", "Vision"],
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that adds a new skill to each employee
// const addSkill = (employees, newSkill) => {
//   return employees.map((employee) => ({
//     ...employee,
//     skills: [...employee.skills, newSkill],
//   }));
// };

// console.log(JSON.stringify(addSkill(employees, "Problem Solving"), null, 2))
// ;

/// EX:14

// const users = [
//   { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
//   { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
//   { id: 4, name: "Deepak", friends: [] },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that returns the name of a user's first friend
// const getFirstFriendName = (users, userId) => {
//   const user = users.find((u) => u.id == userId);
//   // if (!user) {
//   //   return "User not found";
//   // } else {
//   // return user?.friends?.[0]?.name ?? `${user.name} has no friends 🥲`;
//   // }
//   return !user
//     ? "User not found"
//     : user?.friends?.[0]?.name ?? `${user.name} has no friends 🥲`;
// };

// console.log(getFirstFriendName(users, 1));
// console.log(getFirstFriendName(users, 2));
// console.log(getFirstFriendName(users, 3));
// console.log(getFirstFriendName(users, 4));

// EX: 15

// const numbers = [1, 2, 3, 4, 5];

// // ===== YOUR CODE BELOW =====
// // Use map to double each number
// const doubleNumbers = (numbers) => {
//   // Your code here
//   return numbers.map((Number) => Number * 2);
// };

// console.log(JSON.stringify(doubleNumbers(numbers)));

// EX:16

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // ===== YOUR CODE BELOW =====
// // Use filter to keep only even numbers
// const getEvenNumbers = (numbers) => {
//   return numbers.filter((number) => number % 2 == 0);
// };

// console.log(JSON.stringify(getEvenNumbers(numbers)));

// EX:17

// const numbers = [1, 2, 3, 4, 5];

// // ===== YOUR CODE BELOW =====
// // Use reduce to sum all numbers
// const sumNumbers = (numbers) => {
//   return numbers.reduce((acc, crr) => acc + crr);
// };

// console.log(sumNumbers(numbers));

// EX:18

// const scores = [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 85 },
//   { name: "Charlie", score: 92 },
//   { name: "Diana", score: 88 },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that finds and formats the top scorer
// const getTopScorer = (scores) => {
//   const topScorer = scores.reduce((acc, crr) =>
//     acc.score > crr.score ? acc : crr
//   );
//   return `${topScorer.name} is the top scorer with a score of ${topScorer.score}.`;
// };

// console.log(getTopScorer(scores));

//EX:19

// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
//   {
//     id: 4,
//     title: "Eega",
//     director: "S. S. Rajamouli",
//     year: 2012,
//     ratings: [7, 8, 9],
//     genre: "Fantasy",
//   },
//   {
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [9, 9, 8],
//     genre: "Sports",
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that finds a movie by ID and returns formatted details
// const getMovieDetails = (movies, id) => {
//   const vovels = ["a", "e", "i", "o", "u"];
//   const movieDetails = movies.find((movie) => movie.id == id);
//   // Version:1
//   // if (!movieDetails) {
//   //   return "Movie not found";
//   // } else {
//   //   const firstLetter = movieDetails.genre.slice(0, 1).toLowerCase();
//   //   return vovels.includes(firstLetter)
//   //     ? `${movieDetails.title} is an ${movieDetails.genre} movie`
//   //     : `${movieDetails.title} is a ${movieDetails.genre} movie`;
//   // }

//   //  Version:2
//   return !movieDetails
//     ? "Movie not found"
//     : vovels.includes(movieDetails.genre.slice(0, 1).toLowerCase())
//     ? `${movieDetails.title} is an ${movieDetails.genre} movie`
//     : `${movieDetails.title} is a ${movieDetails.genre} movie`;
// };

// console.log(getMovieDetails(movies, 1));
// console.log(getMovieDetails(movies, 5));
// console.log(getMovieDetails(movies, 6));

// EX:20

// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
//   {
//     id: 4,
//     title: "Eega",
//     director: "S. S. Rajamouli",
//     year: 2012,
//     ratings: [7, 8, 9],
//     genre: "Fantasy",
//   },
//   {
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [9, 9, 8],
//     genre: "Sports",
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that calculates average rating after a specific year
// const getAverageRatingAfterYear = (movies, year) => {
//   const movieRateing = movies.filter((movie) => movie.year > year);

//   if (movieRateing.length === 0) {
//     return "No movies after the specified year";
//   } else {
//     const averate = movieRateing.flatMap(({ ratings }) => ratings);
//     const total = averate.reduce((acc, crr) => acc + crr, 0);
//     const average = total / averate.length;
//     return average.toFixed(2);
//   }
// };
// console.log(getAverageRatingAfterYear(movies, 2016));
// console.log(getAverageRatingAfterYear(movies, 2020));

//EX:21

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that checks if all movies of a genre have high ratings
const allRatingsAboveForGenre = (movies, rating, genre) => {
  const movieGenere = movies.filter((movie) => movie.genre === genre);
  const criteria = movieGenere.flatMap((movie) => movie.ratings);
  const final = criteria.every((rate) => rate >= rating);

  return final
    ? `Yes, all ${genre} movies are above ${rating} ratings`
    : `No, not all ${genre} movies are above ${rating} ratings`;
};

console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));
