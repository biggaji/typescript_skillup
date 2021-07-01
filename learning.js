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
        else if (err.errorData && err.errorData.code !== undefined) {
            return {
                errorType: err.errorData.type,
                code: err.errorData.code
            };
        }
        else if (err.errorData && err.errorData.message !== undefined && err.errorData.code !== undefined) {
            return {
                errorType: err.errorData.type,
                message: err.errorData.message,
                code: err.errorData.code
            };
        }
        else {
            return {};
        }
    }
    else {
        return err.errorData;
    }
}
let d = {
    type: "js"
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
// The extends keyword on an interface allows us to effectively copy members from other named types, and add whatever new members we want.
