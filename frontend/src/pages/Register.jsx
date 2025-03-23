// src/pages/Register.jsx
import React, { useState } from "react";
import { auth } from "../firebase"; // make sure the path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  // Set up state for email and password fields.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission.
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    try {
      // Call Firebase's createUserWithEmailAndPassword function.
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
    } catch (err) {
      console.error(err);
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="w-full max-w-md p-4 bg-white shadow rounded">
        <h1 className="text-2xl mb-4 text-center">Register</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
}
