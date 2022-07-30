let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/loginSystem", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((error) => {
    console.log(error);
  });
