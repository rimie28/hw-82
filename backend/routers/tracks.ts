import express from 'express';
import {Track} from "../models/Track";


const tracksRouter = express.Router();

tracksRouter.get('/', async (req, res) => {
    const { album } = req.query;
    const query = album ? { album } : {};
    const tracks = await Track.find(query).populate('album');
    res.json(tracks);
});

tracksRouter.post('/', async (req, res) => {
    const track = new Track(req.body);
    await track.save();
    res.status(201).json(track);
});

export default tracksRouter;
