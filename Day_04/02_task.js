var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

// Output
// Case 1
// Please enter your fav 🍧?: vanilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberry

var ice = window.prompt("Please enter your fav 🍿");
if (ice == stock1) {
  console.log("Yes, we have vanilla in stock");
} else if (ice == stock2) {
  console.log("Yes,we have chocolate  in stock");
} else if (ice == stock3) {
  console.log(" Yes, we have butterscotch in stock");
} else if(ice==stock4){
 console.log(" Yes, we have cottonCandy  in stock");
}else{
  console.log(`we ran out of ${ice}`)
}
