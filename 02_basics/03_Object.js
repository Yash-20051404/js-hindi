// singleton 
// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Yash",
    "full name": "yash jain",
    [mySym]: "mykey1",
    location: "muzaffaranagar",
    email: "yash@gmsil.com",
    isLoggedIm: false,
    lastLoginDays: ["monday","saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

// change previous value

JsUser.email = "yash123@gmai.com"

//lock the data

// Object.freeze(JsUser)

console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello user , ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



