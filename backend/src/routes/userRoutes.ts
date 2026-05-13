import express from "express";

import { syncUser } from "../controllers/userController.js";

import { clerkMiddleware } from "../middleware/clerkMiddleware.js";

const router = express.Router();

router.post(
  "/sync",
  clerkMiddleware,
  syncUser
);

export default router;