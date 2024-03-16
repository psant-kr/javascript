function SetUsername(username) {
    // complex db callls
    this.username = username
    console.log("called");
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}
// call passes the current execution context to another function
const chai = new CreateUser("chai", "chai@fb.com", "123")
console.log(chai);
//----------------------concept ends--------------
const tea = new SetUsername("tea")
console.log(tea)