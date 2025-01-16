import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, AppDispatch } from '../store';
import {getAlbums} from "../features/AlbumSlice.ts";

const AlbumsList: React.FC = () => {
    const { artistId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { albums } = useSelector((state: RootState) => state.albums);

    useEffect(() => {
        if (artistId) dispatch(getAlbums(artistId));
    }, [dispatch, artistId]);


    return (
        <div>
            <h3>Albums</h3>
            <div className="container">
                {albums.map((album) => (
                    <div className="card" key={album.id}>
                        <img className="card-img" src={album.image} alt={album.name} />
                        <p>{album.name} ({album.releaseYear})</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumsList;
