const {
  address: { city },
  hobbies: [, , hobby],
} = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },

  hobbies: ["cricket", "football", "carrom"],
};

// console.log(student.address1[0]);

// console.log(student.address.city); // Trichy
// console.log(typeof student.address); // object
// console.log(student.address.state);

console.log(city);
console.log(hobby);

// Clue: Nested Destructing

const book = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  aatherAge: 45,
};

const details = {
  year: 2002,
  price: 1200,
  aatherAge: 55,
};

// console.log(book.author);

const fullDetails = { ...details, ...book };
console.log(fullDetails);
