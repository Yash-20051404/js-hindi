//const tinderUser = new Object()     //singleton object 

const tinderUser = {}

tinderUser.id = 'abc123'
tinderUser.name = 'yash'
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "yash",
            lastname: "jain",
        }
    }  
}

console.log(regularUser.fullname.username.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// {target , source} yh pr khali bracket ek target ki trah act krra hai

const obj5 = {...obj1, ...obj2}
console.log(obj4)

console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))
 
console.log(tinderUser.hasOwnProperty('isLoggedIn'))


console.log(tinderUser.id)

/// API - apna kaam dusre pr dal dena

{
    "name": "yash",
    "course": "js in h9ndi",
    "price": "free"
}

{
    {},
    {},
    {},
}