function SayMyName(){
    console.log("Y")
    console.log("A")
    console.log("C")
    console.log("H")
}

// SayMyName()

function add(n1 , n2){

    // let result = n1 + n2
    // return result
    return n1 + n2
}

const result = add(3,5)

console.log("Result: ",result)

add(3,4)


function LoginUserName(username){
    if(username == undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(LoginUserName("yash"))

console.log(LoginUserName())    // is case me undefined aata hai 


function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(200, 400, 600, 500))

const user = {
    username: "Yash",
    price: 1999

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 899
})

const myNewArray = [200 , 400 , 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,500]))