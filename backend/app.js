import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// link the router file //
import userRoutes from "./routes/users.js";
import bodyParser from "body-parser";
// Initialize app //
const app = express();

// import //
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//link the router file //
app.use("/users", userRoutes);

// doot env import file //
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

// connection mongoose file //
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => {
    console.log("no connection");
  });

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
