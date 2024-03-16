const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details fron database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
// object is collection of properties and methods.
console.log(user.username)
// console.log(user.loginCount)
// console.log(user.signedIn)
// console.log(user.getUserDetails()) // we have to run it as it is a method.
console.log(this) // global context in node environment.