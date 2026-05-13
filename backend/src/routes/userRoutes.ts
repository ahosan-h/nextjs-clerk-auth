import express from "express";

import { syncUser } from "../controllers/userController.js";

import { clerkMiddleware } from "../middleware/clerkMiddleware.js";

const userRouter = express.Router();

userRouter.post(
  "/sync",
  clerkMiddleware,
  syncUser
);

export default userRouter;