const accountId = 14453
let accountEmail = "jainyash1404@gmail.com"
var accountPassword = "12345"
accountCity = "kht"
let accountState;

// accountId = 2 not allowed

accountEmail = "hc@gmail.com"
accountPassword = "1625"
accountCity = "mumbai"


console.log(accountId);


// prefer not to use var because of use issue in block and functional scope


console.table([accountEmail , accountId , accountPassword , accountCity , accountState])