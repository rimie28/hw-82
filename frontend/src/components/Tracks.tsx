import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, AppDispatch } from '../store';
import {getTracks} from "../features/TrackSlice.ts";

const TracksList: React.FC = () => {
    const { albumId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { tracks } = useSelector((state: RootState) => state.tracks);

    useEffect(() => {
        if (albumId) dispatch(getTracks(albumId));
    }, [dispatch, albumId]);


    return (
        <div>
            <h4>Tracks</h4>
            <div className="container">
                {tracks.map((track) => (
                    <div className="card" key={track.id}>
                        <p>{track.number}. {track.name}</p>
                        <span>{track.duration}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TracksList;
