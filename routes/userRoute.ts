import { createUser, deleteUser, findUser, findUsers, updateUser } from '../controller/userController';
import {Router} from 'express';



const userRoute = Router();


userRoute.post('/create',createUser);
userRoute.get('/',findUsers);
userRoute.get('/:id',findUser)


userRoute.put('/:id',updateUser)

userRoute.delete('/:id',deleteUser)

export default userRoute;