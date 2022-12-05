let mongoose = require("mongoose");
const adminPassword = encodeURIComponent( process.env.ADMIN_PASSWORD )
mongoose.connect("mongodb+srv://admin:admin@cluster0.bctanhi.mongodb.net/itlab?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((error) => {
    console.log(error);
  });
