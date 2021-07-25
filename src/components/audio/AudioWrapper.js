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
        setIsPlaying(!isPlaying);
    }

    function skipTrack(direction) {
        if (!isPlaying) setIsPlaying(true);

        if (direction==='left') audioManager.previousTrack();
        if (direction==='right') audioManager.nextTrack();

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
                <button id="like-track" className="btn"></button>
                <button id="volume-button" className="btn"></button>
                <div id="middle-controls">
                    <p id="track-time">0:00</p>
                    <div id="progress-wrapper">
                        <div id="playback-progress">
                            <div id="progress-ball"></div>
                        </div>
                    </div>
                    <p id="track-duration">0:00</p>
                </div>
            </div>
            <div id="right-audio-controls">
                <button className="btn" id="skip-left-btn" onClick={() => skipTrack('left')}></button>
                <button 
                ref={playButton} 
                className={`btn ${isPlaying ? 'pause-button' : 'play-button'}`}
                onClick={togglePlayTrack}
                >
                </button>
                <button className="btn" id="skip-right-btn" onClick={() => skipTrack('right')}></button>
            </div>
        </div>
    )
}

AudioWrapper.propTypes = {
    AudioManager: PropTypes.object.isRequired
}

export default AudioWrapper;