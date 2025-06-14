function one(){
    const username = "yash"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    two()

}

one()

// nested function mer child function parent function ko access kr pate hai

if (true) {
    const username = "yash"
    if (username == "yash"){
        const website = " youtube "
        console.log(username + website)
    }

    // console.log(website)
}
  
// console.log(username)

//************Intersesting ******************/


function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)
