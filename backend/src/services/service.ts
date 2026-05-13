import UserModel from "../models/User.js";


export const syncUserService = async (
  clerkId: string,
  email: string
) => {
  return UserModel.findOneAndUpdate(
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