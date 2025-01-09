import express from 'express';
import { User } from '../models/User';
import { TrackHistory } from '../models/TrackHistory';

const trackHistoryRouter = express.Router();

// @ts-ignore
trackHistoryRouter.post('/', async (req, res) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            return res.status(401).send({error: 'No token present'});
        }

        const user = await User.findOne({token});

        if (!user) {
            return res.status(401).send({error: 'Wrong token!'});
        }

        const { track } = req.body;

        if (!track) {
            return res.status(400).json({ error: 'No track present' });
        }

        const trackHistory = new TrackHistory({
            user: user._id,
            track,
            datetime: new Date()
        });

        await trackHistory.save();
        res.status(201).json(trackHistory);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default trackHistoryRouter;