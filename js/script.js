//Most thing in js are objects, but there are exceptions. Things like null,booleans,numbers and strings are not objects

//The  global object in js is the window Object.

console.log(window);//console returns 

console.log(window.innerHeight);//prints back 694(px)

/* What I woll learn Today */

/* 
Creating our own Objects using object literal notation
Javascript Classes and constructors
Class Inheritance
Method chaining
Prototype and prototype inheritance
*/

// Take an instance with the the following code, this is unmanagable.


//uaerOne details
var userOneEmail = 'kahwai@gmail.com';
var userOneName = 'kahwai';
var userOneFriends = ['ksfv','srvwserv', 'srvsdv'];

//user2
var userOneEmail = 'wai@gmail.com';
var userTwoName = 'wai';
var userTwoFriends = ['nggksfv','xcsrvwserv', 'ngtdxfsrvsdv'];

//user3
var userThreeEmail = 'kai@gmail.com';
var userThreeName = 'kai';
var userThreeFriends = ['sfbsksfv','srvfsbrswserv', 'srvsrbssdv'];

function login(email){
    console.log(email, 'is now online');
}

function logout(email){
    console.log(email, 'is now offline');
}

//to avoid such heck we should create objects to store all this info about a user

/* ===CREATING OBJECT LITERALS USING OBJECT LITRAL NOTATIONS,We  put the object properties and methods inside of curly braces */

var user = {
    email: 'kahwai@gmail.com',
    name: 'kahwai'
};

console.log(user);//console returns an array with properties email and name, to access the specific property values
console.log(user.name);//console returns kahwai

//adding method(functions to our object)

var user = {
    email: 'kahwai@gmail.com',
    name: 'kahwai',
    login(){
        console.log(this.name, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};

console.log(user);//console returns the object woith 2 properties(email and name) together with 2 other methods (login and logout function)

console.log(user.login());//console returns kahwai has logged in

/* ===UPDATING PROPERTIES IN THE OBJECT */

user.name = "kevin";

console.log(user);// it now prints out the name with kevin as the value of the property kevin

