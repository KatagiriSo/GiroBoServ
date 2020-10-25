import Mongoose from "mongoose";

interface UserDocument extends Mongoose.Document {
    name: String,
    screen_name: String,
    bio: String
}

let UserSchema = new Mongoose.Schema({
    name: String,
    screen_name: String,
    bio: String
})

let UserModel = Mongoose.model<UserDocument>("UserModel", UserSchema)

export default UserModel