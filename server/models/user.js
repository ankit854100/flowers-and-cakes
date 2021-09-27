import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
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
    cart: [
        {
            productId: String,
            quantity: Number,
            amount: Number,
        }
    ],
    orders: [
        {
            productId: String,
            quantity: Number,
            receiverMobile: String,
            receiverAddress: String,
            receiverEmail: String,
            pincode: String,
            city: String,
            state: String,
            deliveryDate: Date,
            deliveryTimeStart: Date,
            deliveryTimeEnd: Date,
            amount: Number
        }
    ]
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;