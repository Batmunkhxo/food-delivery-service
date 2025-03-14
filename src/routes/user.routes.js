import express from "express";
import getUser from "../controller/users/getUser.js";
import deleteUser from "../controller/users/deleteUser.js";
import { validateEmailAndPassword } from "../middleware/authentication/validateEmailAndPssword.js";
import { loginUser } from "../controller/users/create-User.js";
import { validateEmail } from "../middleware/authentication/validateEmail.js";

export const userRouter = express.Router();

userRouter.post("/", validateEmailAndPassword, validateEmail, loginUser);
userRouter.get("/", getUser);
userRouter.delete("/", deleteUser);
