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