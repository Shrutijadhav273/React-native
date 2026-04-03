API Integration (React / React Native)

API integration means connecting your app to a server to fetch or send data.

Fetch API (Built-in)

The Fetch API is already available in JavaScript.

✅ GET Request Example
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}

export default App;