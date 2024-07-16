import { Router } from 'express'
import { updateStatus } from '../controllers/user.controler';

const userRouter = Router();

userRouter.post("/user", (req, res) => {
    const { username, phone } = req.body;
    const newUser = createUser(username, phone);
    res.status(201).json({newUser});
})

userRouter.get("/user", (req, res) => {
    const listUser = getAllUsers();
    res.status(200).json({listUser});
})

userRouter.patch("/user:id", (req, res) => {
    const { id } = req.params;
    const upadateUser = updateStatus(id);
    res.status(200).json({upadateUser});
})

export { userRouter }