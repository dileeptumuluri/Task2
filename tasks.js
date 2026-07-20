/* ===========================
Task 1 - Employee Profile
=========================== */

let empName = "Dileep";
let employeeId = "EMP654";
let department = "Full Stack Developer";
let salary1 = 20000;
let isPermanent = true;

console.log("Name :", empName);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Salary :", salary1);
console.log("Permanent :", isPermanent);


/* ===========================
Task 2 - Student Details
=========================== */

let student = {
    name: "Dileep",
    age: 22,
    course: "BTech",
    college: "Gitam",
    passed: true
};

console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed Status :", student.passed);


/* ===========================
Task 3 - Shopping Cart
=========================== */

let products = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log(products[0]);
console.log(products[2]);
console.log(products[products.length - 1]);
console.log(products.length);


/* ===========================
Task 4 - Company Employee Database
=========================== */

let employee1 = {
    name: "Dileep",
    designation: "Full Stack Developer",
    salary: 30000,
    skills: ["HTML", "JavaScript", "React"]
};

console.log("Employee Name :", employee1.name);
console.log("Designation :", employee1.designation);
console.log("Second Skill :", employee1.skills[1]);


/* ===========================
Task 5 - Salary Calculation
=========================== */

let basicSalary = 25000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;

console.log("Total Salary :", totalSalary);


/* ===========================
Task 6 - GST Calculator
=========================== */

let productPrice = 4500;
let gst = 18;

let gstAmount = (productPrice * gst) / 100;
let finalAmount1 = productPrice + gstAmount;

console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmount1);


/* ===========================
Task 7 - Even or Odd
=========================== */

let number = 25;

let result = number % 2 === 0 ? "Even Number" : "Odd Number";

console.log(result);


/* ===========================
Task 8 - Login System
=========================== */

let username = "admin";
let password = 12345;

if (username === "admin" && password === 12345) {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}


/* ===========================
Task 9 - Voting Eligibility
=========================== */

let age = 22;

let vote = age >= 18 ? "Eligible for Vote" : "Not Eligible";

console.log(vote);


/* ===========================
Task 10 - EMI Eligibility
=========================== */

let salary2 = 40000;
let experience1 = 3;

if (salary2 > 30000 && experience1 >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


/* ===========================
Task 11 - Product Discount
=========================== */

let price = 5000;
let discount = 10;

let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

console.log("Discount Amount :", discountAmount);
console.log("Final Price :", finalPrice);


/* ===========================
Task 12 - User Registration
=========================== */

let userName = "Dileep";
let email = "dileepthumuluri@gmail.com";
let phone = "7670831746";
let city = "Hyderabad";

console.log("----- User Details -----");
console.log("Name :", userName);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);


/* ===========================
Task 13 - Social Media Profile
=========================== */

let profile = {
    username: "Dileep123",
    followers: 1200,
    following: 450,
    posts: 75,
    verified: true
};

console.log("Username :", profile.username);
console.log("Followers :", profile.followers);
console.log("Verified Status :", profile.verified);


/* ===========================
Task 14 - Restaurant Menu
=========================== */

let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("Second Item :", menu[1]);
console.log("Fourth Item :", menu[3]);
console.log("Last Item :", menu[menu.length - 1]);


/* ===========================
Task 15 - Banking System
=========================== */

let accountBalance = 25000;
let withdraw = 8000;

let remainingBalance = accountBalance - withdraw;

console.log("Remaining Balance :", remainingBalance);


/* ===========================
Task 16 - Mobile Store
=========================== */

let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;

let finalAmount2 = mobilePrice - exchange - coupon;

console.log("Final Amount :", finalAmount2);


/* ===========================
Task 17 - Employee Promotion
=========================== */

let experience2 = 5;
let performance = true;

if (experience2 >= 5 && performance) {
    console.log("Promotion Approved");
} else {
    console.log("Promotion Pending");
}


/* ===========================
Task 18 - Movie Ticket
=========================== */

let ticketPrice = 180;
let people = 5;

let totalAmount = ticketPrice * people;

console.log("Total Amount :", totalAmount);


/* ===========================
Task 19 - Weather App
=========================== */

let temperature = 38;

let weather = temperature >= 35 ? "Hot Day" : "Normal Weather";

console.log(weather);


/* ===========================
Task 20 - Mini HR Management
=========================== */

let employee2 = {
    empCode: "EMP324",
    name: "Dileep",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("Employee Code :", employee2.empCode);
console.log("Employee Name :", employee2.name);
console.log("Department :", employee2.department);
console.log("Salary :", employee2.salary);
console.log("Last Skill :", employee2.skills[employee2.skills.length - 1]);
console.log("Permanent Status :", employee2.permanent);