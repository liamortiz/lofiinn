import './_audio.scss';
import { useState, useEffect, useRef } from 'react';
import tempAlbumCover from '../../assets/lofi-girl.jpg';

import kudasai from '../../assets/kudasai-wheniseeyou.mp3';
import kudasai_thegirl from '../../assets/kudasai-thegirl.mp3';
import AudioManager from './AudioManager';
import Playlist from './Playlist';
import Bar from './Bar';

const tracks = [
    {name: "When I see you", artist: "kudasai", album: "custom1", fileName: kudasai},
    {name: "The Girl", artist: "kudasai", album: "custom1", fileName: kudasai_thegirl}
];
const playlist = new Playlist("default", tracks);
const audioManager = new AudioManager(playlist);

const AudioBar = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [trackDetails, setTrackDetails] = useState(tracks[0]);

    const playButton = useRef(null);

    function togglePlayTrack() {
        if (isPlaying) {
            audioManager.pauseTrack();
        } else {
            audioManager.playTrack();
        }
        playButton.current.classList.toggle('pause-button');
        playButton.current.classList.toggle('play-button');
        setIsPlaying(!isPlaying);
    }

    function previousTrack() {
        audioManager.previousTrack();

        const details = audioManager.getCurrentTrackDetails();
        setTrackDetails(details);

    }
    function nextTrack() {
        audioManager.nextTrack();

        const details = audioManager.getCurrentTrackDetails();
        setTrackDetails(details);
    }

    return (
        <div id="music-bar">
            <div id="track-details">
                <img className="album-cover-icon" src={tempAlbumCover} alt=""/>
                <div id="track-info">
                <p className="track-name">{trackDetails.name}</p>
                <p className="artist-name">{trackDetails.artist}</p>
                </div>
            </div>
            <div id="center-audio-controls">
                <Bar duration={100} curTime={0} onTimeUpdate={0}/>
            </div>
            <div id="right-audio-controls">
                <button className="btn" id="skip-left-btn" onClick={previousTrack}></button>
                <button ref={playButton} className="btn play-button" onClick={togglePlayTrack}></button>
                <button className="btn" id="skip-right-btn" onClick={nextTrack}></button>
            </div>
        </div>
    )
}
export default AudioBar;