// // Always allow typescript to infer types,
// // only assert types when you explicitly need to

// // Object type  
let file: {
  filename: string;
  mimeType: string;
};

file = {
  filename: "Legend of the seeker",
  mimeType: "mp4",
};

console.log(file.filename);

// // string type

let username = "bigg_aji";

// // number type

let graduatedYear: number;

graduatedYear = 2016;

// // boolean type

let isGraduated = true;

// // empty type

let empty:{};

// // Array type

let fruits: string[] = ['Orange','Apple','Pineapple','Strawberry'];

function outputEach() {
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

outputEach();

// // mixed arrays
let mixArr: (string|number)[];

mixArr = ["hello",4,"rust"];
console.log(mixArr);

// // tuple
// // tuple  can have optional elements - element?

let rgb:[number,string,string] = [1,"firstname", "lastname"];

console.log(rgb);

type rgb = [number,number,number];


let genRandomColorCode = ():rgb => {
    let r:number;
    let g: number;
    let b: number;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return [r,g,b];
}

for(let o = 0; o < 5; o++) {
    console.log(genRandomColorCode());
}
// loops

for(let i = 0; i < fruits.length; i++) {
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
enum transactionStatus {
    successful,
    pending,
    failed
}
// enum values are accessed using the enumName.enumValue and returns a number

console.log(transactionStatus.failed)

// sendMoney

let sendMoney = ():transactionStatus => {
    return transactionStatus.successful;
}

if(sendMoney() === 0) {
    console.log('Transaction successful')
} else if (sendMoney() === 1) {
    console.log("Transaction pending");
} else if (sendMoney() === 2) {
    console.log('Transaction failed')
} else {
    console.log("An error occured during transaction!");
}
console.log(sendMoney())


// // object type

let LoginData: {
    email: string;
    password: string;
}

// optional properties

type myData = {
    full_name:string,
    working?:boolean
}

function logData(data:myData) {
    if(data.working !== undefined) {
        if(data.working) {
            return `${data.full_name} is working!`;
        }
    }
    return `${data.full_name} is jobless!`;
}
    
console.log(logData({full_name: "Tobiloba Ajibade", working:false}));

// Narrowing
"- type guards , using typeof to check assertion types and choose best code it solves"
// example

function outPut(str:string | number) {
    // narrowing 
    if(typeof str === "string"){
        return str.toLowerCase();
    }
    return str * str;
}

console.log(outPut(3));

// truthiness narrowing
// Using conditional checks like && || ! and if to test for if a value is found!
let str = "Shade";
if(str && typeof str === "string") {
    // convert to uppercase
    console.log(str.toLocaleUpperCase());
}
// equality narrowing

// using conditional  statements with equality checks such as !==, ==, === != to narrow types

// exp
function send(data: string | number | null)  {
    if(data != null) {
        if(typeof data === "string") {
            console.log(data.toLowerCase());
        } else {
            console.log("It is a number : ", data * data);
        }
    } else {
        console.log("The value is null");
    }
};

send("hello world!");

// The in operator narrowing

// The in  operator is used to loop through objects, use the property as a string to find it in the object

let user = {
    name: "Shade",
    online: true,
    swim: () => {
        return "I can swim!";
    }
}

if("swim" in user) {
    console.log(user.swim())
}
console.log( "swim" in user);

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

function sayName(person: {name: string, age?: number}) {
    return "Hey! " + person.name;
}

// or via interface

interface Person {
    name:string;
    age?:number;
}

function sayNameInt(person:Person) {
  return "Hey! " + person.name;
}

// or via type alias

type person  = {
    name: string,
    age?: number
}

function sayNameType(person: person) {
  return "Hey! " + person.name;
}

console.log(sayName({name: "Tobi"}));
console.log(sayNameInt({ name: "Tobint" }));
console.log(sayNameType({ name: "Tobitype" }));
type dataType = "json"| "raw";

interface ResponseTyped {
    type: string | dataType,
    message?: string,
    code?: number 
}


type errorRes = {
    errorData:ResponseTyped
}

function logError(err: errorRes) {
    if(err.errorData.type === "json") {
        if(err.errorData && err.errorData.message !== undefined ) {
            return {
            errorType: err.errorData.type,
            message: err.errorData.message
            };    
        }
        else if(err.errorData && err.errorData.code !== undefined) {
                return {
                errorType: err.errorData.type,
                code: err.errorData.code
                };
        } else if(err.errorData && err.errorData.message !== undefined && err.errorData.code !== undefined) {
            return {
            errorType: err.errorData.type,
            message: err.errorData.message,
            code: err.errorData.code
            };
        } else {
                return {}
    }
} else {
    return err.errorData
}
}

let d = {
    type: "js"
}
console.log(logError({errorData:d}))

// Property modifier

//  Optional property

// All optionality really says is that if the property is set, it better have a specific type.

type nons = {
    name: string,
    isNons?: boolean
}

let shoe:nons;

shoe = {
    name: "Gucci"
}
console.log(shoe.name)