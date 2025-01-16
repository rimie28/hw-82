import { configureStore } from '@reduxjs/toolkit';
import {albumReducer} from "./features/AlbumSlice.ts";
import {trackReducer} from "./features/TrackSlice.ts";
import {artistReducer} from "./features/ArtistSlice.ts";

export const store = configureStore({
    reducer: {
        artists: artistReducer,
        albums: albumReducer,
        tracks: trackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
