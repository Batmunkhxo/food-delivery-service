import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { userRouter } from "./routes/user.routes.js";
import { AuthenticationRouter } from "./routes/authentication.routes.js";
import { categoryRouter } from "./routes/category.routes.js";
import { foodRouter } from "./routes/food.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 6666;

const url =
  "mongodb+srv://mongodb+srv://batmunkhxo:<Spider705-@batmunkhxo.90ys8.mongodb.net/?retryWrites=true&w=majority&appName=batmunkhxo";
const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("successful");
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.use("/user", userRouter);
app.use("/auth", AuthenticationRouter);
app.use("/food-category", categoryRouter);
app.use("/food", foodRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
