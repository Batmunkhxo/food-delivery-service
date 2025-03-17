import express from "express";
import { validateEmailAndPassword } from "../middleware/authentication/validateEmailAndPssword.js";
import { validateEmail } from "../middleware/authentication/validateEmail.js";
export const AuthenticationRouter = express.Router();

AuthenticationRouter.post(
  "/login",
  validateEmail,
  validateEmailAndPassword,
);
