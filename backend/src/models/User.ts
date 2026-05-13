import mongoose, {
  Schema,
  Model,
  Document
} from "mongoose";



export interface IUser extends Document {
  clerkId: string;
  email: string;
}

const userSchema = new Schema<IUser>(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel: Model<IUser> =
  mongoose.models.User ||
  mongoose.model<IUser>(
    "User",
    userSchema
  );

export default UserModel;