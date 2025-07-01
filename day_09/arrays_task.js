// Task 3.1

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getTitles = (books) => books.map((book) => book.title);
// console.log(getTitles(books));

// Task 3.2

const getTitles1 = (books) =>
  books.filter((book) => book.genre == "Fiction").map((book) => book.title);

// console.log(getTitles1(books));

//------------------------------------------------------------------------------------------------------

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
