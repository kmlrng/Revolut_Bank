const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: String,
  email: String,
  currentBalance: Number,
  movements:{
    type: Array,
    default : []
  } ,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
