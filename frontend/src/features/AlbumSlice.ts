import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../axiosAPI';

export const getAlbums = createAsyncThunk(
    'albums/getAlbums',
    async (artistId: string) => {
        const response = await axiosAPI.get(`/artists/${artistId}/albums`);
        return response.data;
    }
);

interface Album{
    id: string;
    name: string;
    artist: string;
    releaseYear: string;
    image: string;
}

interface AlbumState {
    albums: Album[];
}

const initialState: AlbumState = {
    albums: [],
};

const albumSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAlbums.fulfilled, (state, action) => {
                state.albums = action.payload;
            })
    },
});

export const albumReducer = albumSlice.reducer;
