What is State Management?

👉 State = Data that can change in your app

Examples:

User name
Login status
Cart items
API data

👉 State management = how you store + update + share this data


useState (Basic State)
🔹 What it does:

Stores and updates data inside a component

📌 Syntax:
const [state, setState] = useState(initialValue);
📌 Example:
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

👉 count = current value
👉 setCount = function to update

⚡ Important Points
Updating state → UI automatically re-renders
Never change state directly:
count = 5 ❌
setCount(5) ✅


useEffect (Side Effects)
🔹 What it does:

Runs code when something happens:

Component loads
State changes
Props change
📌 Syntax:
useEffect(() => {
  // code here
}, [dependencies]);
📌 Example (runs once on load):
useEffect(() => {
  console.log("App loaded");
}, []);
📌 Example (runs when count changes):
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
📌 Real Example (API call):
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
⚡ Key Idea
Dependency	Behavior
[]	run once
[count]	run when count changes
no array	run every render


Context API (Global State)
🔹 Problem:

Passing data like this 👇 is messy:

App → Screen → Component → Child → Child...

👉 Called prop drilling

🔹 Solution:

Context API = share data globally

📌 Step-by-Step Example
Step 1: Create Context
import React, { createContext } from 'react';

export const UserContext = createContext();
Step 2: Provide Data
<UserContext.Provider value={{ name: "Shruti" }}>
  <Home />
</UserContext.Provider>
Step 3: Use Data
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
  const { name } = useContext(UserContext);

  return <Text>{name}</Text>;
};
⚡ Use Cases
User login info
Theme (dark/light)
App settings


Redux (Advanced State Management)
🔹 Why Redux?

When app becomes BIG:

Many screens
Complex data
Multiple updates

👉 Context becomes hard → Redux helps

🔹 Core Concepts
1. Store

👉 Central place to store all data

2. Actions

👉 What you want to do

{ type: "INCREMENT" }
3. Reducer

👉 How state changes

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
4. Dispatch

👉 Send action

dispatch({ type: "INCREMENT" });
📌 Flow Diagram
Component → Dispatch → Action → Reducer → Store → UI update
📌 Example (Simple Redux)
const initialState = { count: 0 };

function reducer(state = initialState, action) {
  if (action.type === "ADD") {
    return { count: state.count + 1 };
  }
  return state;
}
⚡ Redux Toolkit (Modern Way)

👉 Easier than traditional Redux