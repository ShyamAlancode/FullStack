console.log("Hello");
console.log("Welcome to JavaScript!");

var a = 10;
a = 11;
console.log(a);

var a = 20;
console.log(a);

let b = 10;
b = 11;
console.log(b);

const c = 10;
console.log(c);

var college = "Sece";

function Employee(name, company) {
    console.log(
        "My name is", name,
        "and I am working in", company,
        ", I studied in", college
    );
}

Employee("Alice", "Google");
Employee("Bob", "Microsoft");
Employee("Charlie", "Amazon");

let data1 = function () {
    return "hello javascript";
};
console.log(data1());

let multiply = (x, y) => {
    console.log(x * y);
};

function sece(callback) {
    console.log("I am a callback function");
    callback(4, 10);
}

sece(multiply);

let fetch_api = new Promise((resolve, reject) => {
    let api = true;

    if (api) {
        resolve("Fetched api data");
    } else {
        reject("Failed to fetch api data");
    }
});

fetch_api
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

console.log("----- BLINKIT ORDER SYSTEM -----");

function placeOrder(orderName) {
    return new Promise((resolve, reject) => {
        let orderAccepted = true;

        if (orderAccepted) {
            resolve("Your order " + orderName + " has been accepted!");
        } else {
            reject("Sorry! Your order " + orderName + " has been rejected.");
        }
    });
}

placeOrder("Milk, Bread and Eggs")
    .then((message) => {
        console.log(message);
        console.log("Your order is being prepared.");
    })
    .catch((error) => {
        console.log(error);
        console.log("Please try ordering again.");
    })
    .finally(() => {
        console.log("Thank you for shopping with Blinkit!");
    });
