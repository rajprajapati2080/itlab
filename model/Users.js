let mongoose = require("mongoose");
let userSchema = require("./userSchema");
let User = mongoose.model("User", userSchema);
module.exports = User;
