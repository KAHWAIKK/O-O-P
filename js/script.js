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

    //.this keyword refers to the object
};

console.log(user);//console returns the object woith 2 properties(email and name) together with 2 other methods (login and logout function)

console.log(user.login());//console returns kahwai has logged in

/* ===UPDATING PROPERTIES IN THE OBJECT */

user.name = "kevin";

console.log(user);// it now prints out the name with kevin as the value of the property kevin


/* JAVASCRIPT CLASSES */

//lets say we now have many users, that means we will have to create many object literal to contain the users data, this would be cumbersome and repetitive, to combat this js came up classes in es6, lets dive in

class User {
    constructor(email,name){
        //inside of the constructor function, only put in object properties
        this.email = email;
        this.name = name;
    };
    //methods are put outside of the constructor function
    login(){
        console.log(this.name ,'just logged in');
    }
    logout(){
        console.log(this.name ,'just logged ot');
    }
    updateScore(){

    };
}

//the 'new' keyword
//creates a new emty object inside our class
//sets the value of 'this' to the new empty object
//calls the constructor method

var userOne = new User("kah@gmail,com","kah");//passing in value to the constructor function as arguements
var userTwo = new User("kahwa@gmail,com","kahwa");
var userThree = new User("kag@gmail,com","kag");
var userFour = new User("ima@gmail,com","ima");

console.log(userOne);//console returns {email: 'kah@gmail,com', name: 'kah'}
console.log(userTwo);//console returns {email: 'kahwa@gmail,com', name: 'kahwa'}

/* ==CLASS METHODS== */


class UserA {
    constructor(email,name){
        //inside of the constructor function, only put in object properties
        this.email = email;
        this.name = name;
    };
    //methods are put outside of the constructor function
    login(){
        console.log(this.name ,'just logged in');
    }
    logout(){
        console.log(this.name ,'just logged ot');
    }
    updateScore(){

    };
}

//the 'new' keyword
//creates a new emty object inside our class
//sets the value of 'this' to the new empty object
//calls the constructor method

var userOne = new UserA("kah@gmail,com","kah");//passing in value to the constructor function as arguements
var userTwo = new UserA("kahwa@gmail,com","kahwa");
var userThree = new UserA("kag@gmail,com","kag");
var userFour = new UserA("ima@gmail,com","ima");

console.log(userOne);//console returns {email: 'kah@gmail,com', name: 'kah'}
console.log(userTwo);//console returns {email: 'kahwa@gmail,com', name: 'kahwa'}

console.log(userOne.login());//console returns kah just logged in

console.log(userTwo.logout());//console returns kahwa just logged ot


/* ===METHOD CHAINING=== */

class UserB {
    constructor(email,name){
        //inside of the constructor function, only put in object properties
        this.email = email;
        this.name = name;
        this.score = 0;
    };
    //methods are put outside of the constructor function
    login(){
        console.log(this.name ,'just logged in');
        return this;
    }
    logout(){
        console.log(this.name ,'just logged ot');
        return this;
    }
    updateScore(){
        this.score ++;
        console.log(this.name ,'score is now', this.score );
        return this;
    };
}

//the 'new' keyword
//creates a new emty object inside our class
//sets the value of 'this' to the new empty object
//calls the constructor method

var userOne = new UserB("kah@gmail,com","kah");//passing in value to the constructor function as arguements
var userTwo = new UserB("kahwa@gmail,com","kahwa");
var userThree = new UserB("kag@gmail,com","kag");
var userFour = new UserB("ima@gmail,com","ima");

console.log(userOne);//console returns {email: 'kah@gmail,com', name: 'kah'}
console.log(userTwo);//console returns {email: 'kahwa@gmail,com', name: 'kahwa'}

console.log(userTwo.updateScore());//console returns kahwa score is now 1


//checking if this type of method chaining works
//console.log(userOne.login().logout());//console returns error,

//to combat this we use the keyword return this after every fn, this ensure we now have data from a prevoius method that we can now chaoin another method to it using the dot notation

console.log(userOne.login().logout().updateScore());//console returns the object as expected with the methods as expected /* kah just logged in .kah just logged ot .kah score is now 1 */


/* ===CLASS INHERITANCE=== */

class UserC {
    constructor(email,name){
        //inside of the constructor function, only put in object properties
        this.email = email;
        this.name = name;
        this.score = 0;
    };
    //methods are put outside of the constructor function
    login(){
        console.log(this.name ,'just logged in');
        return this;
    }
    logout(){
        console.log(this.name ,'just logged ot');
        return this;
    }
    updateScore(){
        this.score ++;
        console.log(this.name ,'score is now', this.score );
        return this;
    };
 
}

//the 'new' keyword
//creates a new emty object inside our class
//sets the value of 'this' to the new empty object
//calls the constructor method

var userOne = new UserC("kah@gmail,com","kah");//passing in value to the constructor function as arguements
var userTwo = new UserC("kahwa@gmail,com","kahwa");
var userThree = new UserC("kag@gmail,com","kag");
var userFour = new UserC("ima@gmail,com","ima");

class Admin extends UserC {

    //we dont need the constructor function as it will use that from UserC class
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        });
        
   
    }
}

var userOne = new UserC("kah@gmail,com","kah");//passing in value to the constructor function as arguements
var userTwo = new UserC("kahwa@gmail,com","kahwa");
var userThree = new UserC("kag@gmail,com","kag");
var userFour = new UserC("ima@gmail,com","ima");
var admin = new Admin("gwima@gmail,com","gwima");
var admin2 = new Admin("hai@gmail,com","hai");

var users = [userOne,userTwo,userThree,userFour,admin,admin2]


//check if oyr array works
console.log(users);// works as expected and returns our array with 6 items



//trying to delete userTwo from our array
console.log(admin2.login().deleteUser(userOne));

console.log(users);//the console returns our array with 5 items, userOne has been deleted 
