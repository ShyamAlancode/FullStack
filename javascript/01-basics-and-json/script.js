console.log("Hello");
console.log("JavaScript");

var age = 19; // declaration and initialization
age = 30; // re-initialization
var age = 40; // re-declaration
console.log("Age:", age);

let studentName = "mithun";
studentName = "MithunKrishna";
// re-declaration is not possible with let
console.log("Name:", studentName);

const pi = 3.14;
// re-initialization and re-declaration are not possible with const
console.log("Pi:", pi);

function employee(name, company, college = "Sri Eshwar College of Engineering") {
    console.log("Name: " + name);
    console.log("Company: " + company);
    console.log("College: " + college);
    console.log("-------------------------");
}

employee("Mithun", "Google");
employee("Arun", "TCS");
employee("Priya", "Infosys");

let data1 = function () {
    return "Hello JavaScript";
};
console.log(data1());

let mult = (a, b) => {
    return a * b;
};
console.log(mult(2, 4));

function sece(callback) {
    console.log("Welcome SECE");
    callback();
}

let whatsapp = () => {
    console.log("love says bye");
};

let notification = () => {
    console.log("you have a new message");
};

sece(notification);
whatsapp();

let emp = [
    {
        emp_id: 101,
        emp_name: "Mithun",
        emp_salary: 40000,
        skills: ["java"],
    },
    {
        emp_id: 102,
        emp_name: "Arun",
        emp_salary: 60000,
        company: {
            c1: "TCS",
            c2: "ACCENTURE",
        },
    },
];
console.log(emp[0].emp_salary);

// object to JSON string
let stringify_data = JSON.stringify(emp);
console.log(stringify_data);

// JSON string to object
let parsed_data = JSON.parse(stringify_data);
console.log(parsed_data);

// deep copy via JSON
let copied_data = JSON.parse(JSON.stringify(emp));
copied_data[1].company.c1 = "amazon";
console.log("Original Data:", emp);
console.log("Copied Data:", copied_data);
