import type {
  Request,
  Response,
  NextFunction,
} from "express";

import { verifyToken } from "@clerk/backend";

export const clerkMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.method === "OPTIONS") {
      return next();
    }

    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

   const token =
  authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
    message: "Unauthorized",
   });
  }

    const sessionClaim =
      await verifyToken(token, {
        secretKey:
          process.env.CLERK_SECRET_KEY!,
      });

    req.user = {
      clerkId: sessionClaim.sub,
      email:
        (sessionClaim as any).email || "",
    };

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
};