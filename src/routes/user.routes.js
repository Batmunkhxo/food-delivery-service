import express from "express";
import getUser from "../controller/users/getUser.js";
 import { validateEmailAndPassword } from "../middleware/authentication/validateEmailAndPssword.js";
import postUser from "../controller/users/postUser.js";

export const userRouter = express.Router();

userRouter.post("/", validateEmailAndPassword,postUser);
userRouter.get("/", getUser);
userRouter.delete("/", );
