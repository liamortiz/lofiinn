import './_audio.scss';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const audioManagerProps = {
    playlists: PropTypes.array.isRequired,
    currentTrackId: PropTypes.string.isRequired
}
const AudioManager = (props) => {

    const [playlists, setPlaylists] = useState(props.playlists);
    const [currentPlaylist, setCurrentPlaylist] = useState(props.playlists[0]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [trackTime, setTrackTime] = useState("0:00");
    const [trackDuration, setTrackDuration] = useState("0:00");
    const [isPlaying, setIsPlaying] = useState(false);
    const progressBall = useRef(null);
    const playButton = useRef(null);
    const previousTrackId = useRef(props.currentTrackId);

    useEffect(initializePlaylist, []);

    useEffect(() => {
        if (previousTrackId.current !== props.currentTrackId) {
            previousTrackId.current = props.currentTrackId;
            playTrackById(props.currentTrackId);
        }
    }, [props.currentTrackId]);

    useEffect(() => {
        initializePlaylist();
    }, [currentPlaylist]);

    function initializePlaylist() {
        currentPlaylist.initialize();
        setCurrentTrack(currentPlaylist.getCurrentTrackDetails());

        currentPlaylist.getCurrentTrack().addEventListener('loadeddata', timeTrackCallback);
        currentPlaylist.getCurrentTrack().addEventListener('timeupdate', timeTrackCallback);
    }

    function timeTrackCallback({ target }) {
        const currentTime = target.currentTime;
        const duration = target.duration;

        const formatTime = (duration) => {   
            const mins = ~~((duration % 3600) / 60);
            const secs = ~~duration % 60;
            const ret = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
            return ret;
        }
        setTrackTime(formatTime(currentTime));
        setTrackDuration(formatTime(duration));

        const ballPosition = (currentTime / duration) * 100
        progressBall.current.style.left=`${ballPosition - 2}%`;
    }

    function togglePlayTrack() {
        if (isPlaying) {
            currentPlaylist.pause();
        } else {
            currentPlaylist.play();
        }
        setIsPlaying(!isPlaying);
    }

    function skipTrack(direction) {
        if (!isPlaying) setIsPlaying(true);

        currentPlaylist.skip(direction);
        currentPlaylist.getCurrentTrack().addEventListener('timeupdate', timeTrackCallback);
        setCurrentTrack(currentPlaylist.getCurrentTrackDetails());
    }

    function playTrackById(id) {
        if (currentPlaylist.playTrackById(id)) {
            setCurrentTrack(currentPlaylist.getCurrentTrackDetails());
            currentPlaylist.getCurrentTrack().addEventListener('timeupdate', timeTrackCallback);
            setIsPlaying(true);
        }
    }

    function switchPlaylist(id) {
        const targetPlaylist = playlists.find((playlist) => playlist.id === id);
        if (targetPlaylist) {
            currentPlaylist.pause();
            setIsPlaying(false);
            setCurrentPlaylist(targetPlaylist);
            setCurrentTrack(targetPlaylist.getCurrentTrackDetails());   
        }
    }

    return (
        <div id="music-bar">
            <div id="track-details">
                <img className="album-cover-icon" src={currentTrack?.cover} alt=""/>
                <div id="track-info">
                <p className="track-name">{currentTrack?.name}</p>
                <p className="artist-name">{currentTrack?.artist}</p>
                </div>
            </div>
            <div id="center-audio-controls">
                <button id="like-track" className="btn"></button>
                <button id="volume-button" className="btn"></button>
                <div id="middle-controls">
                    <p id="track-time">{trackTime}</p>
                    <div id="progress-wrapper">
                        <div id="playback-progress">
                            <div id="progress-ball" ref={progressBall}></div>
                        </div>
                    </div>
                    <p id="track-duration">{trackDuration}</p>
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
            <button onClick={() => switchPlaylist(playlists[1].id)}>Switch Playlist</button>
        </div>
    )
}

AudioManager.propTypes = audioManagerProps;

export default AudioManager;