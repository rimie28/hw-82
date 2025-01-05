import express from 'express';
import mongoose from 'mongoose';
import artistsRouter from "./routers/artists";
import albumsRouter from "./routers/albums";
import tracksRouter from "./routers/tracks";

const app = express();
app.use(express.json());
const port = 8000;

app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);
app.use('/tracks', tracksRouter);

mongoose
    .connect('mongodb://localhost:27017/hw-82')
    .then(() => {
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((error) => console.error(error));
