const marvel_heros = ["thor","ironman", "spiderman"]
const dc_heros = ["spiderman","flash","batman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros)
//console.log(marvel_heros[3][1])

const allheros = marvel_heros.concat(dc_heros)  // push use krte h to array k andr array aata hai isliye concat use krte h
console.log(allheros)

const ALLHEROS = [...marvel_heros , ...dc_heros]    //spread operatoir
console.log(ALLHEROS)

const newarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
const newarray2 = newarray.flat(Infinity)
console.log(newarray2)

// saare array ko ek array me convert krke deta hai 

console.log(Array.isArray("yash"))   //return true or false on whether yash is array
console.log(Array.from("yash"))

console.log(Array.from({name: "yash"}))

let score1 = 400
let score2 = 300
let score3 = 600

console.log(Array.of(score1, score2, score3))