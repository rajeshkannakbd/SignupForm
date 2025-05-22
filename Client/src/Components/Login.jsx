import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log("Registration successful:", result);
        if(result.data ==="sucess"){
        navigate("/home");}
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };

  return (
    <div className="bg-gray-500 w-full h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold text-slate-800">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full border-2 border-slate-300 p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-xl font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full border-2 border-slate-300 p-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 mt-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
