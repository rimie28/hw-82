import express from "express";
import {Album} from "../models/Album";

const albumsRouter = express.Router();

albumsRouter.get('/', async (req, res) => {
    const {artist} = req.query;
    const query = artist ? { artist } : {};
    const albums = await Album.find(query).populate('artist');
    res.json(albums);
})

albumsRouter.post('/', async (req, res) => {
    const album = new Album(req.body);
    await album.save();
    res.status(201).json(album);
});

// @ts-ignore
albumsRouter.get('/:id', async (req, res) => {
    const album = await Album.findById(req.params.id).populate('artist');
    if (!album) return res.status(404).json({ message: 'Album not found' });
    res.json(album);
});

export default albumsRouter;
