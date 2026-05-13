import User from "../models/user.model.js";

export const syncUserService = async (
  clerkId: string,
  email: string
) => {
  return User.findOneAndUpdate(
    {
      clerkId,
    },
    {
      $set: {
        clerkId,
        email,
      },
    },
    {
      upsert: true,
      new: true,
    }
  );
};