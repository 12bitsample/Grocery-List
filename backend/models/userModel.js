import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';


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
        throw new Error('All fields must be filled out.');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw new Error('Email already in use.');
    }

    //create salt
    const salt = await bcrypt.genSalt(10);
    //hash password
    const hash = await bcrypt.hash(password, salt);
    //create
    const user = await this.create({ email, password: hash });

    return user;

}

const UserModel = mongoose.model('User', userSchema);

export {UserModel as default};