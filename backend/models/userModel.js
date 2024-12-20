import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const {Schema} = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

//static signup method
userSchema.statics.signup = async function (email, password) {
    
    //validation
    if (!email || !password) {
        throw Error("All fields must be filled out.");
    }

    // check that email is email address
    if (!validator.isEmail(email)) {
        throw Error("Email must be a valid email address.");    
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already in use.");
    }

    //create salt
    const salt = await bcrypt.genSalt(10);
    //hash password
    const hash = await bcrypt.hash(password, salt);
    //create user
    const user = await this.create({ email, password: hash });

    return user;
}

//static login method
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
        throw Error("All fields must be entered.");
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw new Error("No user with that email exists.");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Password is incorrect.");
    }

    return user;
}

const UserModel = mongoose.model("User", userSchema);

export {UserModel as default};