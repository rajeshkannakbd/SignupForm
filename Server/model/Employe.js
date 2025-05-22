const mongoose = require('mongoose');

const Employeeschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
const EmployeeModel = mongoose.model("employees",Employeeschema)
module.exports = EmployeeModel

// mongoose.connect('mongodb://127.0.0.1:27017/employee')
//   .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });
