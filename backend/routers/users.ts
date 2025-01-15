import express from 'express';
import { User } from '../models/User';
import { Error } from 'mongoose';

const usersRouter = express.Router();

// @ts-ignore
usersRouter.post('/', async (req, res, next) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });

        user.generateToken();

        await user.save();
        return res.send(user);
    } catch (error) {
        if (error instanceof Error.ValidationError) {
            return res.status(400).send(error);
        }
        return next(error);
    }
    }
);

// @ts-ignore
usersRouter.post('/sessions', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if (!user) {
            return res.status(400).send({error: 'Username not found'});
        }

        const isMatch = await user.checkPassword(req.body.password);

        if (!isMatch) {
            return res.status(400).send({error: 'Password is wrong'});
        }

        user.generateToken();
        await user.save();

        return res.send({message: 'Username and password correct!', user});
    } catch (error) {
        res.status(500).json(error);
    }
});

export default usersRouter;