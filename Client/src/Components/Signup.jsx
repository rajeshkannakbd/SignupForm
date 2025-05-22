import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log("Registration successful:", result);
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };

  return (
    <div className="bg-gray-500 w-full h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold text-slate-800">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full border-2 border-slate-300 p-2 mt-1"
            />
          </div>
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
            className="w-full rounded bg-green-600 text-white py-2 mt-3 rounded"
          >
            Register
          </button>
          <h5>Already Have an Account?</h5>
        </form>
        <button onClick={()=>navigate("/login")} className=" border-2 w-[95%] p-2 mx-2 mt-3 bg-slate-100 rounded">Sign up</button>
      </div>
    </div>
  );
};

export default Signup;
