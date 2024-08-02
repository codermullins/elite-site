const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const app = express();
const port = 4000;
const dotenv = require("dotenv");

dotenv.config();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());

mongoose
  .connect(
    `mongodb+srv://mrchrismullins:${password}@elitecluster.grputig.mongodb.net/?retryWrites=true&w=majority&appName=EliteCluster`,
    {}
  )
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((error) => {
    console.error("Mongo connections error:", error);
  });
app.use(cors());
app.use(express.json());
app.use("/getProducts", productRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
