let score = "44abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = "hitesh"


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true 
// 0 => false
// "hitesh" => true


let someNumber = 66
let stringNumber = String(someNumber)

console.log(typeof stringNumber)
console.log(stringNumber)

//******************** OPERATIONS *****************//

let value = 4
negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " yash"

console.log(str1+str2)
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

// agar string phle hai to pura string bn jayega
// agar string last me hai to phle pura ho jayega fir string me convert hoga

console.log(+true)
console.log(+"")

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
console.log(gameCounter)

let x = 3
let y1 = x++
let y2 = ++x
// let y2 = x++

console.log(y1)
console.log(y2)