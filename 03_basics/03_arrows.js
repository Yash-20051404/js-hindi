const user = {
    username: "yash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)
  
console.log(this)   // ye print krta hai null set 

// this => current context me jo value hoti h vo print krta hai 


// function chai(){
//     let username = "yash"
//     console.log(this.username);    // gives undefined
// }

// chai()


const chai = () => {
    let username = "yash"
    console.log(this)
}

chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

const addTwo = (num1 , num2) => ( num1 + num2 )     // no return word needed

console.log(addTwo(3,4))
