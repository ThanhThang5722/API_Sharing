const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRouter = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("Database connection successful!"));

app.use(express.json({ limit: "10kb" }));

// Defaut endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server side!",
    app: "API Sharing",
    from: "GDSC-UIT",
  });
});

app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
