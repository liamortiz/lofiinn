import {Link} from 'react-router-dom';
import './_home.scss';

import albumCover1 from '../../assets/lofi-art-1.jpg';
import albumCover2 from '../../assets/lofi-art-2.jpg';
import albumCover3 from '../../assets/lofi-art-3.jpg';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import kudasai from '../../assets/kudasai-wheniseeyou.mp3';
import kudasai_thegirl from '../../assets/kudasai-thegirl.mp3';
import fleetwood from '../../assets/fleetwoodmac-dreams.mp3';
import AudioManager from '../audio/AudioManager';

const tracks = [
    {name: "When I see you", artist: "kudasai", album: "custom1", fileName: kudasai, id: uuidv4()},
    {name: "The Girl", artist: "kudasai", album: "custom1", fileName: kudasai_thegirl, id: uuidv4()},
    {name: "Dreams", artist: "FleetWood Mac", album: "custom1", fileName: fleetwood, id: uuidv4()}];

const Home = () => {
    const [currentTrackId, setCurrentTrackId] = useState(tracks[0].id);
    
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
                    <div className="track-container" onClick={() => setCurrentTrackId(tracks[0].id)}>
                        <img src={albumCover2} alt=""/>
                        <p className="track-name">When I See You</p>
                        <p className="track-artist">Kudasai</p>
                    </div>
                    <div className="track-container" onClick={() => setCurrentTrackId(tracks[1].id)}>
                        <img src={albumCover1} alt=""/>
                        <p className="track-name">The Girl</p>
                        <p className="track-artist">Kudasai</p>
                    </div>
                    <div className="track-container" onClick={() => setCurrentTrackId(tracks[2].id)}>
                        <img src={albumCover3} alt=""/>
                        <p className="track-name">Dreams</p>
                        <p className="track-artist">Fletwood Mac</p>
                    </div>
                </div>

            </div>
        </div>
        <AudioManager playlist={{name: "chill-mix", tracks, id: uuidv4()}} currentTrackId={currentTrackId}/>
        </>
    )};

export default Home;