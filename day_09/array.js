var a=[1,2,3,4,5]
var b=a.reverse()
// console.log(b,a) 


// task 1.1
var y1 = "present";
var y2 = "absent";
var y3 = "present";

if ([y1,y2,y3].every((y)=>y=="present")) {
  console.log("Class started");
} else {
  console.log("No Class");
}


// Task 1.2

// Task 1.2
const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "absent" },
  { name: "Rohan", status: "present" },
];

// Task 1.2.1
if (students[0].status=="present"&&students[1].status=="present"&&students[2].status=="prasent") {
  console.log("Class started");
} else {
  console.log("No Class");
}

// Task 1.2.2
if (students.every((st)=>st.status=="present")) {
  console.log("Class started");
} else {
  console.log("No Class");
}

