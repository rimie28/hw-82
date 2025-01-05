import express from 'express';
import {Artist} from "../models/Artist";

const artistsRouter = express.Router();

artistsRouter.get('/', async (req, res) => {
    const artists = await Artist.find();
    res.json(artists);
})

artistsRouter.post('/', async (req, res) => {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(200).json(artist);
})

export default artistsRouter;