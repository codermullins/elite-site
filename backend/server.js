const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const eventsRoute = require("./routes/events");
const app = express();
const port = 4000;
const dotenv = require("dotenv");
const User = require("./models/user");

dotenv.config();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());

mongoose
  .connect(
    `mongodb+srv://mrchrismullins:${password}@elitecluster.grputig.mongodb.net/?retryWrites=true&w=majority&appName=EliteCluster`
  )
  .then((results) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Chris",
          email: "mrchrismullins@gmail.com",
          password: "Madness08",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    console.log("Connected to Mongo");
  })
  .catch((error) => {
    console.error("Mongo connections error:", error);
  });
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  User.findById("66bb615c3fad7d790ecd59a0")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

//Products Routes
app.use("/products", productRoutes);

//User Routes
app.use("/users", userRoutes);

//Events Routes
app.use("/events", eventsRoute);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
