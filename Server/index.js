const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./model/Employe");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee", {});

// Register employee
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json());
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          status: "success",
          user: {
            name: user.name,
            email: user.email,
          },
        });
      } else {
        res.json("the password is in correct");
      }
    } else {
      res.json("no record exists");
    }
  });
});
app.listen(3001, () => {
  console.log("Server is running");
});

// if (!name || !email || !password) {
//   return res.status(400).json({ error: 'All fields are required' });
// }

// EmployeeModel.create({ name, email, password })
//   .then((employee) => {
//     console.log('Employee saved:', employee);
//     res.status(201).json(employee);
//   })
//   .catch((err) => {
//     console.error('Error saving employee:', err);
//     res.status(500).json({ error: 'Failed to register employee', details: err });
//   });

// Start server
