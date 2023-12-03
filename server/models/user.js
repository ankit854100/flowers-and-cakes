import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    mobile: String,
    dob: {
        type: Date,
        default: new Date()
    },
    gender: String,
    primaryAddress: String,
    addressBook: [String],
    pincode: String,
    city: String,
    country: String,
    isAdmin: Boolean,
    cart: [],
    orders: []
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;