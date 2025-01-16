import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../axiosAPI';

export const getTracks = createAsyncThunk(
    'tracks/getTracks',
    async (albumId: string) => {
        const response = await axiosAPI.get(`/albums/${albumId}/tracks`);
        return response.data;
    }
);

interface Track {
    id: string;
    name: string;
    album: string;
    duration: string;
    number: number;
}

interface TrackState {
    tracks: Track[];
}

const initialState: TrackState = {
    tracks: [],
};

const trackSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTracks.fulfilled, (state, action) => {
                state.tracks = action.payload;
            })
    },
});

export const trackReducer = trackSlice.reducer;
