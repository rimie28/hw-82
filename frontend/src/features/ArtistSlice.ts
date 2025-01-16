import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from "../axiosAPI.ts";

export const getArtists = createAsyncThunk(
    'artists/getArtists',
    async () => {
        const response = await axiosAPI.get('/artists')
        return response.data;
    }
);

interface Artist {
    id: string;
    name: string;
    photo: string;
    information: string;
}

interface ArtistState {
    artists: Artist[];
}

const initialState: ArtistState = {
    artists: [],
};

const artistSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArtists.fulfilled, (state, action) => {
                state.artists = action.payload;
            })
    },
});

export const artistReducer = artistSlice.reducer;
