import {Link} from 'react-router-dom';
import './_home.scss';

import albumCover1 from '../../assets/covers/lofi-art-1.jpg';
import albumCover2 from '../../assets/covers/lofi-art-2.jpg';
import albumCover3 from '../../assets/covers/lofi-art-3.jpg';
import albumCover4 from '../../assets/covers/lofi-art-4.jpg';
import albumCover5 from '../../assets/covers/avatar.jpg';
import albumCover6 from '../../assets/covers/darkchoco.png';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import kudasai from '../../assets/tracks/kudasai-wheniseeyou.mp3';
import kudasai_thegirl from '../../assets/tracks/kudasai-thegirl.mp3';
import fleetwood from '../../assets/tracks/fleetwoodmac-dreams.mp3';
import foreverLoveTrack from '../../assets/tracks/ForeverLove.mp3';
import darkChocolateTrack from '../../assets/tracks/DarkChocolate.mp3';
import dearKataraTrack from '../../assets/tracks/ldre-DearKatara.mp3';
import AudioManager from '../audio/AudioManager';
import PlaylistManager from '../audio/PlaylistManager';
import Playlist from '../audio/Playlist';

const tracks = [
    {name: "When I see you", artist: "kudasai", album: "custom1", fileName: kudasai, id: uuidv4(), cover: albumCover2, playlistId: 1},
    {name: "The Girl", artist: "kudasai", album: "custom1", fileName: kudasai_thegirl, id: uuidv4(), cover: albumCover1, playlistId: 1},
    {name: "Dreams", artist: "FleetWood Mac", album: "custom1", fileName: fleetwood, id: uuidv4(), cover: albumCover3, playlistId: 1},
    {name: "Dark Chocolate", artist: "L.Dre", album: "custom1", fileName: darkChocolateTrack, id: uuidv4(), cover: albumCover6, playlistId: 2},
    {name: "Forever Love", artist: "Bootleg Boy", album: "custom1", fileName: foreverLoveTrack, id: uuidv4(), cover: albumCover4, playlistId: 2},
    {name: "Dear Katara", artist: "L.Dre", album: "custom1", fileName: dearKataraTrack, id: uuidv4(), cover: albumCover5, playlistId: 2}];


const playlists = [
    new Playlist("Chill Mix", tracks.slice(0, 3), 1),
    new Playlist("Soft Sounds", tracks.slice(3, 6), 2)
]


const Home = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    return (
        <>
        <div data-testid="home-wrapper" id="home-wrapper">
            <div id="welcome-heading">
                <h1>Listen, relax, focus.</h1>
                <p className="sub-heading">
                    Stream Lofi exclusive music, chat with others who share your Lofi interests, and upload Lofi related content!
                </p>

                <Link className="btn sign-in-btn" to="/signin">Sign In</Link>
                <Link className="btn create-account-btn" to="/create-account">Create Account</Link>
            </div>
            <div className="track-browse">
                <h2>Community Favorites</h2>
                <div className="track-overview">
                    {tracks.slice(0, 3).map(track => (
                        <div className="track-container" onClick={() => setCurrentTrack(track)} key={track.id}>
                            <img src={track.cover} alt=""/>
                            <p className="track-name">{track.name}</p>
                            <p className="track-artist">{track.artist}</p>
                        </div>
                    ))}
                </div>
                <h2>Picked by You</h2>
                <div className="track-overview">
                    {tracks.slice(3, 6).map(track => (
                        <div className="track-container" onClick={() => setCurrentTrack(track)} key={track.id}>
                            <img src={track.cover} alt=""/>
                            <p className="track-name">{track.name}</p>
                            <p className="track-artist">{track.artist}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
        <PlaylistManager/>
        <AudioManager playlists={playlists} currentTrack={currentTrack}/>
        </>
    )};

export default Home;