console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)  //false
console.log(null == 0)  //false
console.log(null >= 0)  //true

// null ko jb comparison krte hai tb vo ek number me convert ho jata hai 
// so in first case null becomes 0 therefore 0 > 0 and is false

// 2nd case me null == 0 is false because null does'nt equal to 0 in loose equality

// 3rd case me null is converted to  0 and hence it is 0

// comparison converts null to a number 0

// equality does'nt convert null to a number when comparing with 0

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

//undefined ke case me ye false hi aata hai 

// === yer stricly check krta checking datatype also

console.log("2" === 2)