// // // Operators
// // let inbox = 10;
// // console.log(inbox * 7);

// // function great() {
// //   let name = prompt("What is your name?");
// //   console.log("Welcome to our website " + name);
// // }
// // console.log("rest of the code");

// // function signUp() {
// //   let name = prompt("What is your name?");
// //   greet();
// // }
// // signUp();
// // Objects

// const user = {
//   name: "Ed",
//   age: 25,
//   married: false,
//   greet: "Hello there"

// };
// console.log(user.greet);
// class Dog {
//   constructor(name, breed, age, isGood) {
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.isGood = isGood;
//   }
// }
// let georgie = new Dog("Fred", "Pitbull", 4, true);

// let colors = ["Red", "Blue", "Orange", "Yellow"];

// colors.pop("Red");
// colors.push("Purple");
// colors.shift();
// colors.unshift();
// console.log(colors.indexOf("Blue"));
// console.log(colors[2]);

// console.log(colors.length);

// Switch
const text = "banana";
let fruitNumber = 0;

switch (text) {
  case "banana":
    console.log("i Love them");
    fruitNumber = 1;
    break;
  case "apple":
    console.log("UGH!  I do't like these.");
    fruitNumber = 3;
  case "avocada":
    console.log("NOOOO! I'm allergic");
    fruitNumber = 8;
    break;
}
