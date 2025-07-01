const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

function getTitles(books) {
  for (let book of books) {
    [].push(book.title);
  }
  return  [].push(book.title) ;
}
console.log(getTitles(books));



function getGenre(books) {
    let bookGenres=[]
  for (let book of books) {
    if (book.genre == "Fiction") {
      bookGenres.push(book.title)
    }
  }
  return bookGenres
}
console.log(getGenre(books));
