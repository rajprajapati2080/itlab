let express = require("express");
let router = express.Router();
let User = require("../model/Users");
let bcrypt= require('bcryptjs')
router.get("/", (req, res) => {
  res.render("home", {message:''});
});
router.get("/home", (req, res) => {
  res.render("home", { message: "" });
});
router.get("/login", (req, res) => {
  res.render("login", { message: "" });
});
router.get("/signup", (req, res) => {
  res.render("signup", { message: "" });
});
router.post("/signup", async (req, res) => {
  let { name, email, password, userType } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      res.render("signup", { message: "already exists" });
    } else if (password.length < 6) {
      res.render("signup", { message: "minlength" });
    } else {
      let user = await new User({ name, email, password, userType });
      let data = await user.save();
      console.log(data);
      res.render("signup", { message: "registered" });
    }
  } catch (error){
    console.log(error)
  }
});
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    console.log(existingUser.password)
    let matchPassword= await bcrypt.compare(password, existingUser.password)
    if(!matchPassword){
      res.render("login", { message: "invalid password" });
    }
    else{
      if (existingUser.userType == "admin") {
        res.render("admin", { message: "welcome admin" });
      } else {
        res.render("home", { message: "welcome user" });
      }
    }
  } catch (error) {
    res.render("login", { message: "invalid" });
  }
});
module.exports = router;
