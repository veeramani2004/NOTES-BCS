//  const marks =[90,84,82,95,30].reduce((acc,curnt)=>acc>curnt? acc:curnt)
// console.log (marks)

// Task 1.1
// Use Reduce
// Find the top score
// Output
// 95

// const scores = [
//   {
//     marks: 32,
//     name: "Yvette Merritt",
//   },
//   {
//     marks: 57,
//     name: "Lillian Ellis",
//   },
//   {
//     marks: 22,
//     name: "Mccall Carter",
//   },
//   {
//     marks: 21,
//     name: "Pate Collier",
//   },
//   {
//     marks: 91,
//     name: "Debra Beard",
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock",
//   },
//   {
//     marks: 20,
//     name: "Hatfield Hodge",
//   },
// ];

// // Task 1.2
// // Use Reduce
// // Find the top scorer name
// // Output
// // Debra Beard

// const topscore = scores.reduce((max, curr) => {
//   if (max.marks > curr.marks) {
//     return max
//   } else {
//     return curr
//   }
// });
// // console.log(topscore.name)

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
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that formats movie titles with their ratings
// const getTitlesAndRatings = (movies) => {
//  const titles =movies.map(movie=>movie.title+ ": " + movie.ratings.join(", "))
//  return titles.join(" | ")
// };

// console.log(getTitlesAndRatings(movies));

// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     ratings: [8, 9, 10],
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     ratings: [9, 8, 9],
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     ratings: [10, 9, 8],
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that compiles all ratings into a single array
// const getAllRatings = (movies) => {(acc,curr)=>(...acc,...crr.ratings),[]}
// return movies

//   // Your code here

// };

// console.log(JSON.stringify(getAllRatings(movies)));

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
const allRatingsAboveForGenre = (movies, rating, genre) => {
  // Your code here
  const genreRating = movies.filter((movie) => movie.genre == genre);
  const genreRating1 = genreRating.reduce(
    (acc, curr) => [...acc, ...curr.ratings],
    []
  );

  if (genreRating1.every((r) => r > rating)) {
    return `Yes, all ${genre} movies are above ${rating} ratings`;
  } else {
    return `No, not all ${genre} movies are above ${rating} ratings`;
  }
};

console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));
