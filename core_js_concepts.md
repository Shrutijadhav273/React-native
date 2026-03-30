1. let and const

Used to declare variables (instead of old var)

✅ let (can change value)
let age = 20;
age = 25; // ✅ allowed
✅ const (cannot change value)
const name = "Shruti";
name = "Ram"; // ❌ error

👉 Use:

const → when value should NOT change
let → when value WILL change
🟢 2. Arrow Functions (=>)

Short way to write functions

Normal function:
function add(a, b) {
  return a + b;
}
Arrow function:
const add = (a, b) => {
  return a + b;
};
Shorter version:
const add = (a, b) => a + b;

👉 Used heavily in React Native

🟢 3. Destructuring

Extract values from objects or arrays easily

Without destructuring:
const user = { name: "Shruti", age: 21 };
console.log(user.name);
With destructuring:
const { name, age } = user;
console.log(name);

👉 Cleaner and faster

🟢 4. Promises

Used for handling async operations (like API calls)

Example:
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data loaded");
  } else {
    reject("Error occurred");
  }
});
Using .then():
promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

👉 Used when task takes time (API, database, etc.)

🟢 5. async / await (Easier Promises)

Cleaner way to handle async code

Example:
const fetchData = async () => {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

👉 await waits for result
👉 async makes function asynchronous