// array 

const myarr = [0,1,2,3,4,5,true]
const myHeros = ["shaktimaan" , "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myarr.length)
console.log(myarr[6])

//****array method******//

myarr.push(6)
console.log((myarr))

myarr.pop()

myarr.unshift(8)     // start me value insert krne k liye
console.log(myarr)

myarr.shift()   // starting value delete krta hai
console.log(myarr)

console.log(myarr.includes(9)) // returns true of false whether no. is in array or not
console.log(myarr.indexOf(3))
console.log(myarr.indexOf(9))  // return -1 as -1 is not there

const newArr = myarr.join()  // converts array into string
console.log(newArr)


//*************slice , splice************//

console.log("A " , myarr)

const myn1 = myarr.slice(1,3)
console.log(myn1)

console.log("B " , myarr)

const myn2 = myarr.splice(1,3)
console.log(myn2)

console.log(myarr)

// slice me to jse (1,3) hai to 1 include hoga aur 3 include ni hoga aur original array me koi change ni hoga
// splice me orginal array me se 1,2,3 remove ho jayega aur isme 3 bh include hota hai aur returen krta hai ye 1,2,3