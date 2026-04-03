import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
    } catch (err) {
      setMessage("Login failed");
    }
  };

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/profile", {
        headers: {
          Authorization: token,
        },
      });

      setMessage(res.data.message + " " + res.data.user.email);
    } catch (err) {
      setMessage("Access denied");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>JWT Auth Demo</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={login}>Login</button>
      <button onClick={getProfile}>Get Profile</button>

      <p>{message}</p>
    </div>
  );
}

export default App;