 function sayHello(){
    return function(){
        console.log("hello!😘")
    }
 }
//  var x=sayHello()
//  console.log(return function)


const add=(x)=>(y)=>x+y
console.log(add(5)(9))