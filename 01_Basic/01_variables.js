const accountid= 12344
let accountEmail = "shoaib@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"

let accountState;

//accountid = 2 not allowed as const cannot be reassigned




accountEmail= "sa@g.com"
accountPassword = "123456"
accountCity = "Lahore"


console.log(accountid);

console.table([accountid, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var
because of issue in block scope and function scope
*/
