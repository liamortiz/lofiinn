import './_audio.scss';
import { useState, useRef } from 'react';
import tempAlbumCover from '../../assets/lofi-girl.jpg';
import PropTypes from 'prop-types';

const AudioWrapper = (props) => {

    const audioManager = props.AudioManager;
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackDetails, setTrackDetails] = useState(audioManager.getCurrentTrackDetails());

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
                <p id="track-time">0:00</p>
            </div>
            <div id="right-audio-controls">
                <button className="btn" id="skip-left-btn" onClick={previousTrack}></button>
                <button ref={playButton} className="btn play-button" onClick={togglePlayTrack}></button>
                <button className="btn" id="skip-right-btn" onClick={nextTrack}></button>
            </div>
        </div>
    )
}

AudioWrapper.propTypes = {
    AudioManager: PropTypes.object.isRequired
}

export default AudioWrapper;