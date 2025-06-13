// DATE

let myDate = new Date()
console.log(myDate) 
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let mynewdate = new Date(2023 , 0 , 23)
console.log(mynewdate.toDateString())
console.log(mynewdate.toLocaleDateString())
 
let mytimestamp = Date.now() /// abhi ki date dega millisecond me


console.log(mytimestamp)
console.log(myDate.getTime()) 
console.log(myDate.getDay())