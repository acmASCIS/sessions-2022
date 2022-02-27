import express from 'express';
import User from '../models/user';



const createUser = async (req: express.Request, res: express.Response) => {
    const { userName, email, password } = req.body;
    try {
        const user = await new User({ name: userName, email, password }).save();
        res.send(user);
    }
    catch (e) {
        res.send('Duplicate Found');
    }

}


const findUsers = async (req: express.Request, res: express.Response) => {
    const users = await User.find({});

    res.send(users);
}


const findUser = async (req: express.Request, res: express.Response) => {

    const { id } = req.params;
    const user = await User.findById(id);

    res.send(user);
}

const deleteUser = async (req: express.Request, res: express.Response) => {

    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    res.send(user);
}


const updateUser = async (req: express.Request, res: express.Response) => {

    const { id } = req.params;
    const { name, password } = req.body;
    const user = await User.findByIdAndUpdate(id, { name, password },{new:true});

    res.send(user);
}

export { createUser, findUsers, findUser, deleteUser,updateUser };