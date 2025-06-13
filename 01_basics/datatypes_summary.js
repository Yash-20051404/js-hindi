// primitive

// 7 types of datatypes : string , number , boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherid = Symbol('123') 

console.log(id==anotherid)  // false


// Reference datatypes (non primitive)
// Array , Object , Function

const heros = ["shakti" , "nagraj" , "doga"]   //array

let myObj = {
               name: "hitesh",
               age: 22,               //object
}

const myFunction = function(){
    console.log("hello world")
}
