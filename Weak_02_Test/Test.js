 const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];

// Task 03

// const mergeOrders=(orders,...rss)=>{
// const merge=[...orders,...rss]
// return merge.flat()
// }                        

//     [[9.7],[8,6]]
// console.log(mergeOrders(orders, [9,7], [8,6])); // Should print the merged array of orders
//    console.log(mergeOrders(orders)); // Should print the original array of orders

//Test 02

// const getFirstNDishNames=(order,number)=>{
//     const getDish= order.slice(0,number).map(order =>order.dishName)
//     return getDish.join(", ")
// }

// console.log(getFirstNDishNames(orders, 3));

// Task 01 

// const getHighRatedDishes =(orders)=>{
//   const dishRatings =orders.filter(order=>order.ratings.every(rates=>rates>=4))
//   const dishes =dishRatings.map(dish=>dish.dishName)
//   return dishes.join(", ")
// }

// console.log(getHighRatedDishes(orders));
// Should print: "Burger, Sushi, Pasta, Tacos, Ramen"


// Task 04

// const getDishNamesByIds =(orderList,...ids)=>{
//   const names = ids.map(id => {
//     const dish = orderList.find(order => order.id === id);
//     return dish?.dishName ?? "Unknown Dish";
//   });

//   return `Selected Dishes: ${names.join(", ")}`;
// }


// console.log(getDishNamesByIds(orders, 1, 3, 5));
//    // Should print: Selected Dishes: Burger, Pasta, Sushi
//    console.log(getDishNamesByIds(orders, 1, 6));
//    // Should print: Selected Dishes: Burger, Unknown Dish
//    console.log(getDishNamesByIds(orders, 5, 1));
//    // Should print: Selected Dishes: Sushi, Burger

// Task 07

const order = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};

function getOrderDetails(o) {
  const dishName = o.dish.name;
  const dishCategory = o.dish.category;
  const orderQuantity = o.quantity;
  const orderPrice = o.price;

  return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
}
console.log(getOrderDetails(order));
