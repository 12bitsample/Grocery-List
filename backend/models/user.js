import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
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
userSchema.statics.signup = async (email, password) => {
    
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use.');
    }

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);
    
}

const UserModel = mongoose.model('User', userSchema);

export {UserModel as default};