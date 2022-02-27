import { Schema, model } from 'mongoose';


const todoSchema = new Schema({
    text: { type: String },
    done: { type: Boolean, default: false, required: false },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})


const ToDo = model('ToDo', todoSchema);


export default ToDo;


