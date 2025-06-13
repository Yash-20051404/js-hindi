const name = "yash"
const age = 20

// console.log(name + age )    ye old tarika hai

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('Yash')

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.endsWith('h'))
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))


// read string ke methods 



const newString = gameName.substring(0,2) //substring m no -ve value
console.log(newString)

const anotherString = gameName.slice(-8,2) 
console.log(anotherString)

const newStringOne = "  Hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())    // remove spaces


const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

const yname = 'yash-good-boy'
console.log(yname.split('-'))