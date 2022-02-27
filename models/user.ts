import { Schema, model, syncIndexes } from 'mongoose';


const userSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
})


const User = model('User', userSchema);


export default User;