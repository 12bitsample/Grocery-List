import mongoose from 'mongoose';

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

const UserModel = mongoose.model('User', userSchema);

export {UserModel as default};