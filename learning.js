"use strict";
// // Always allow typescript to infer types,
// // only assert types when you explicitly need to
// // Object type  
let file;
file = {
    filename: "Legend of the seeker",
    mimeType: "mp4",
};
console.log(file.filename);
// // string type
let username = "bigg_aji";
// // number type
let graduatedYear;
graduatedYear = 2016;
// // boolean type
let isGraduated = true;
// // empty type
let empty;
// // Array type
let fruits = ['Orange', 'Apple', 'Pineapple', 'Strawberry'];
function outputEach() {
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
}
;
outputEach();
// // mixed arrays
let mixArr;
mixArr = ["hello", 4, "rust"];
console.log(mixArr);
// // tuple
// // tuple  can have optional elements - element?
let rgb = [1, "firstname", "lastname"];
console.log(rgb);
let genRandomColorCode = () => {
    let r;
    let g;
    let b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
for (let o = 0; o < 5; o++) {
    console.log(genRandomColorCode());
}
// loops
for (let i = 0; i < fruits.length; i++) {
    // if(fruits[i] === 'Orange') {
    //     console.log(`1 ${fruits[i]} is available for drinking!`);
    // } else {
    //     console.log(`1 ${fruits[i]} is available or eating!`);
    // }
    (fruits[i] === "Orange")
        ? console.log(`1 ${fruits[i]} is available for drinking`)
        : console.log(`1 ${fruits[i]} is available for eating!`);
}
// Enum type
var transactionStatus;
(function (transactionStatus) {
    transactionStatus[transactionStatus["successful"] = 0] = "successful";
    transactionStatus[transactionStatus["pending"] = 1] = "pending";
    transactionStatus[transactionStatus["failed"] = 2] = "failed";
})(transactionStatus || (transactionStatus = {}));
// enum values are accessed using the enumName.enumValue and returns a number
console.log(transactionStatus.failed);
// sendMoney
let sendMoney = () => {
    return transactionStatus.successful;
};
if (sendMoney() === 0) {
    console.log('Transaction successful');
}
else if (sendMoney() === 1) {
    console.log("Transaction pending");
}
else if (sendMoney() === 2) {
    console.log('Transaction failed');
}
else {
    console.log("An error occured during transaction!");
}
console.log(sendMoney());
// // object type
let LoginData;
function logData(data) {
    if (data.working !== undefined) {
        if (data.working) {
            return `${data.full_name} is working!`;
        }
    }
    return `${data.full_name} is jobless!`;
}
console.log(logData({ full_name: "Tobiloba Ajibade", working: false }));
// Narrowing
"- type guards , using typeof to check assertion types and choose best code it solves";
// example
function outPut(str) {
    // narrowing 
    if (typeof str === "string") {
        return str.toLowerCase();
    }
    return str * str;
}
console.log(outPut(3));
// truthiness narrowing
// Using conditional checks like && || ! and if to test for if a value is found!
let str = "Shade";
if (str && typeof str === "string") {
    // convert to uppercase
    console.log(str.toLocaleUpperCase());
}
// equality narrowing
// using conditional  statements with equality checks such as !==, ==, === != to narrow types
// exp
function send(data) {
    if (data != null) {
        if (typeof data === "string") {
            console.log(data.toLowerCase());
        }
        else {
            console.log("It is a number : ", data * data);
        }
    }
    else {
        console.log("The value is null");
    }
}
;
send("hello world!");
// The in operator narrowing
// The in  operator is used to loop through objects, use the property as a string to find it in the object
let user = {
    name: "Shade",
    online: true,
    swim: () => {
        return "I can swim!";
    }
};
if ("swim" in user) {
    console.log(user.swim());
}
console.log("swim" in user);
// Instance of narrowing
// the instanceof operator is used to check if an value is an instance of an object
// it can also be used a typeguards
// assignment
// control flow analysis
// using type predicates    
// type predicates is used to define a custom typeguard
// To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:
// exp
// More on functions
// Modules
// Any script that has a top level import or export keyword is treated as a module, modules contents are not available in the global scope
// They are private to is own script
// Object type
// Object types can be anoynimous or be name via interface or via type alias
// eg
// A Person object passed to a function as an argument
// Explicitly passing it to the parameter
function sayName(person) {
    return "Hey! " + person.name;
}
function sayNameInt(person) {
    return "Hey! " + person.name;
}
function sayNameType(person) {
    return "Hey! " + person.name;
}
console.log(sayName({ name: "Tobi" }));
console.log(sayNameInt({ name: "Tobint" }));
console.log(sayNameType({ name: "Tobitype" }));
function logError(err) {
    if (err.errorData.type === "json") {
        if (err.errorData && err.errorData.message !== undefined) {
            return {
                errorType: err.errorData.type,
                message: err.errorData.message
            };
        }
        if (err.errorData && err.errorData.code !== undefined) {
            return {
                errorType: err.errorData.type,
                code: err.errorData.code
            };
        }
        if (err.errorData && err.errorData.message !== undefined && err.errorData.code !== undefined) {
            return {
                errorType: err.errorData.type,
                message: err.errorData.message,
                code: err.errorData.code
            };
        }
    }
    else {
        return err.errorData;
    }
}
let d = {
    type: "raw",
    message: "Some error message",
    code: 3
};
console.log(logError({ errorData: d }));
let shoe;
shoe = {
    name: "Gucci"
};
console.log(shoe.name);
let myName = {
    name: "Tobiloba Ajibade"
};
console.log(myName.name);
function signup(info) {
    return {
        username: info.username,
        name: info.name,
        password: info.password,
        age: info.age ? info.age : undefined
    };
}
console.log(signup({ username: "biggaji", name: "Tobiloba Ajibade", password: "123", age: 21 }));
function logUserIn(user) {
    return `You have successfully logged in ${user.username}`;
}
console.log(logUserIn({ username: "biggaji", password: "123", rememberMe: true }));
// someOtherInterface and someInterface has been intersected to a new type that contains both members of someInterface and someOtherInterface
// implementation
function BoolInterface(bool) {
    return bool;
}
console.log(BoolInterface({ isInterface: true, isNotInterface: false }));
let box1 = {
    content: ["Tea", "Bread", "Golden morn"]
};
let box2 = {
    content: "Milo"
};
box1.content.push("Biscuit");
console.log(box1.content.push("Wine"));
console.log(box1.content);
console.log(box2.content);
let data1 = {
    info: "Some info"
};
console.log(data1.info);
// Array type
// When ever we write string[] or number[], it is actually a shorthand for Array<string> and Array<number>
// Array itself is a generic type
function someArr(arr) {
    return arr.length;
}
console.log(someArr(["Some", "Salt"]));
new Promise((res, rej) => {
    res("A generic promise");
})
    .then(r => {
    console.log(r);
});
// Generics
// Generic are used to create reusable and flexible types, it uses type variable, a special type of variable
// that works on types rather than values
// Exp
function returnType(arg) {
    return arg;
}
// I can pass any type
let someT = returnType("Ade");
console.log(someT);
// generic type
let someId = returnType;
let someShit = someId;
let someSHIT = someId;
console.log(someSHIT("Ade"));
// generic classes
// A generic class has a generic paramter in an <> bracket after the class name
class EatSome {
    constructor(sub) {
        this.sub = sub;
    }
}
// initializing
let Fruit = new EatSome(2);
Fruit.add = (x, t) => {
    return x + t;
};
console.log(Fruit.sub);
console.log(Fruit.add(5, 2));
// generic constraint
// More on functions
// FUnctions are basic building blocks of many applications
// Types that describe functions
// The simplest way to describe a function is with a function type expression . These types are syntactically similar to arrow function
// exp - print username to console
function printUsername(fn) {
    return fn("biggaji");
}
function usernamePrinter(username) {
    console.log(`Your username is ${username}`);
}
printUsername(usernamePrinter);
class readMachine {
    read() {
        return "Reading from this text";
    }
}
// static member
// Can only be accessed my the class itself and can also used member visibilty: private, protected
class Test {
    static CI() {
        return 'CI test is running!';
    }
    log() {
        // can only be accessed via The class name
        return Test.CI();
    }
}
let newTest = new Test();
console.log(newTest.log());
