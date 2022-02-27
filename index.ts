import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import userRoute from './routes/userRoute';

//import Memebers from './data.json'



const app = express();

mongoose.connect(`${process.env.MONGODB_URI}`,()=> console.log('Connected to DB'))


app.use(express.json());

app.use('/api/user',userRoute);
//app.use('/api/todo',route)


app.listen(3000,()=>console.log('Listening to port 3000'));


