1. Components (Functional & Class)
🔹 What is a Component?

A component is a reusable piece of UI (like a button, form, or page section).

✅ Functional Component (Modern & Recommended)

It is just a JavaScript function.

function Welcome() {
  return <h1>Hello, User!</h1>;
}

👉 Simple, clean, and most commonly used today.

✅ Class Component (Old way)

Uses ES6 classes.

import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, User!</h1>;
  }
}

👉 Used earlier, now mostly replaced by functional components + hooks.

2. Props (Properties)
🔹 What are Props?

Props are used to pass data from parent to child component.

Example:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Shruti" />

👉 Output: Hello, Shruti

✔ Props are read-only (cannot be changed inside component)

3. State
🔹 What is State?

State is used to store dynamic data that can change over time.

Example (Functional Component with useState):
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

👉 When button is clicked → value updates → UI re-renders

4. Event Handling
🔹 Handling user actions (click, input, etc.)
Example:
function ButtonClick() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

👉 onClick is an event

✔ React events use camelCase (onClick, onChange)

5. JSX (JavaScript XML)
🔹 What is JSX?

JSX allows you to write HTML inside JavaScript

Example:
const element = <h1>Hello, world!</h1>;
With JavaScript inside JSX:
const name = "Shruti";
const element = <h1>Hello, {name}</h1>;
Important Rules:

✔ Must return one parent element

return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);

✔ Use className instead of class

<div className="box"></div>