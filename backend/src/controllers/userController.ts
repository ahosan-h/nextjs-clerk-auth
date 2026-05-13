import type {
  Request,
  Response,
} from "express";

import { syncUserService } from "../services/service.js";

export const syncUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { clerkId, email } =
      req.user!;

    const user =
      await syncUserService(
        clerkId,
        email
      );

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};