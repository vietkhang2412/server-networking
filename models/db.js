var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Assignment_MOB403").catch((err) => {
  console.log("Lỗi csdl!");
  console.log(err);
});

module.exports = { mongoose };
