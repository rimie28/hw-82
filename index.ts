import express from 'express';
import mongoose from 'mongoose';
import artistsRouter from "./routers/artists";
import albumsRouter from "./routers/albums";
import tracksRouter from "./routers/tracks";
import usersRouter from "./routers/users";
import trackHistoryRouter from "./routers/track_history";

const app = express();
app.use(express.json());
const port = 8000;

app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);
app.use('/tracks', tracksRouter);
app.use('/users', usersRouter);
app.use('/track_history', trackHistoryRouter);


mongoose
    .connect('mongodb://localhost:27017/hw-82')
    .then(() => {
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((error) => console.error(error));
