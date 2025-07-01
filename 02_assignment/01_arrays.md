## Exercice 15

Transform an array of numbers by doubling each value using the map method.

### answer

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => numbers.map((number) => 2 * number);
// Your code here
console.log(doubleNumbers(numbers));
```

### Expected Output:

[2,4,6,8,10]

## Exercise 16

Filter an array to keep only even numbers using the filter method.

### Answer

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 == 0);

// Your code here

console.log(JSON.stringify(getEvenNumbers(numbers)));
```

### Expected Output:

[2,4,6,8,10]

## Task 3

// Task 3.1

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getTitles = (books) => books.map((book) => book.title);
console.log(getTitles(books));

// Task 3.2

const getTitles1 = (books) =>
  books.filter((book) => book.genre == "Fiction").map((book) => book.title);

console.log(getTitles1(books));
```

## Exercise 19

Write a function that finds a movie by ID and returns its title and genre in a formatted string using array methods and template literals.

### Answer

```js
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
// Write a function that finds a movie by ID and returns formatted details
// const getMovieDetails = (movies, id) => {
//   // Your code here
//   const details = movies.filter(movie => movie.id == id)
//   if (details.length=="0") {
//     return (`movies not found`)
//   } else {
//     return (` ${details[0].title} is ${details[0].genre} movie`)
//   }
// };

// const getMovieDetails = (movies, id) => {
//   const details = movies.filter(movie => movie.id == id)
//     return details.length == "0"? `movies not found`: ` ${details[0].title} is ${details[0].genre} movie`

// };

// Final Code:

const getMovieDetails = (movies, id) =>
  (details = movies.filter((movie) => movie.id == id)).length == "0"
    ? `movies not found`
    : ` ${details[0].title} is ${details[0].genre} movie`;

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));
```

### Expected Output:

Baahubali is an Action movie
Jersey is a Sports movie
Movie not found



## Excersie 21
Write a function that checks if all movies of a certain genre have ratings above a certain value using array methods.

## Answer
```js
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
  // Your code here
  const genreRating = movies.filter((movie) => movie.genre == genre);
  const genreRating1 = genreRating.every((movie) =>
    movie.ratings.every((r) => r > rating)
  );
  if (genreRating1) {
    return `Yes, all ${genre} movies are above ${rating} ratings`;
  } else {
     return `No, not all ${genre} movies are above ${rating} ratings`;
  }
};

console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));

```


### Expected Output:
Yes, all Action movies are above 7 ratings
No, not all Biography movies are above 8 ratings
````
