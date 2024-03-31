

const values = require("./follow");
let errored = false;

console.log("\n---------------------------------\n\n")

if (values.testGroup === "a") {
  if (values.birthYear !== 1947) {
    console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
    errored = true;
  }

  if (values.thisYear !== 1965) {
    console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
    errored = true;
  }

  if (values.firstName !== "Carlos") {
    console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
    errored = true;
  }

  if (values.lastName !== "Stevenson") {
    console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
    errored = true;
  }

  if (values.greeting !== "Hello! My name is Carlos Stevenson and I am 18 years old.") {
    console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
    errored = true;
  }
}

// 'b' testGroup value testing changed to allow user input.
if (values.testGroup === "b") {
  if (typeof(values.birthYear) !== "number") {
    console.error(`"${values.birthYear}" is not a number!`);
    errored = true;
  }

  if (typeof(values.thisYear) !== "number") {
    console.error(`"${values.thisYear}" is not a number!`);
    errored = true;
  }

  if (typeof(values.firstName) !== "string") {
    console.error(`"${values.firstName}" is not a string!`);
    errored = true;
  }

  if (typeof(values.lastName) !== "string") {
    console.error(`"${values.lastName}" is not a string!`);
    errored = true;
  }

  if (typeof(values.age) !== "number") {
    console.error(`"${values.age}" is not a number!`);
    errored = true;
  }

  if (values.fullName !== `${values.firstName} ${values.lastName}`) {
    console.error(`You provided "${values.fullName}", your full name should be ${values.firstName} ${values.lastName}`);
    errored = true;
  }

  if (values.greeting !== `Hello! My name is ${values.fullName} and I am ${values.age} years old.`) {
    console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
    errored = true;
  }
}

if (!errored && values.testGroup === "a") {
  console.log("Congrats! Move onto the next step!");
} else if (errored && values.testGroup === "a") {
  console.log("Try again")
}

if (!errored && values.testGroup === "b") {
  console.log("Congrats! Move onto the next lesson!");
} else if (errored) {
  console.log("Try again")
}

console.log("\n---------------------------------\n\n")