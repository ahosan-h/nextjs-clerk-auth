import mongoose, {Schema} from "mongoose";

interface IUser {
  clerkId: string,
  email:string
}

const userSchema = new Schema<IUser> ({
  clerkId: {
    type:String, 
    required:true,
    unique:true,
  },
  email: {
    type: String,
    required:true,
  },
},{
    timestamps:true,
  })

const UserModel = mongoose.models.User || mongoose.model<IUser>("User", userSchema) 

export default UserModel;