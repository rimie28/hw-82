import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import {getArtists} from "../features/ArtistSlice.ts";

const ArtistsList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { artists } = useSelector((state: RootState) => state.artists);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);

    return (
        <div>
            <h4>Artists</h4>
            <div className="container">
                {artists.map((artist) => (
                    <div className="card" key={artist.id} onClick={() => navigate(`/artists/${artist.id}`)}>
                        <img className="card-img" src={artist.photo} alt={artist.name} />
                        <p>{artist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistsList;
