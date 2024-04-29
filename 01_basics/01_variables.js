const accountId = 1357  //If we define something once inside a `const` variable, we can't change its value later.
console.log(accountId)
// accountId = 7654  // not allowed

let accountEmail= "sajid@google.com"
console.log(accountEmail)

var accountPassword = "2468" // Prefer not to use `var` because of issue in block scope and functional scope.
console.log(accountPassword)

accountCity = "Tezpur" // We can declare the variable in this way in JavaScript but it is not a good way to declare a variable.
console.log(accountCity)

let accountState;
console.log(accountState)

accountEmail = "sajid@s.com"
accountPassword = "8743"
accountCity = "Gauhati"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// Conclusion:- Use `const` and `let`. 