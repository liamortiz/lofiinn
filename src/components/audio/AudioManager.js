import Playlist from './Playlist';
import './_audio.scss';
import { useState, useRef, useEffect } from 'react';
import tempAlbumCover from '../../assets/lofi-girl.jpg';


const AudioManager = (props) => {

    const [playlists, setPlaylists] = useState([]);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [trackTime, setTrackTime] = useState("0:00");
    const [trackDuration, setTrackDuration] = useState("0:00");
    const [isPlaying, setIsPlaying] = useState(false);
    const progressBall = useRef(null);
    const playButton = useRef(null);
    const previousTrackId = useRef(props.currentTrackId);

    useEffect(() => {
        if (!currentPlaylist) {
            console.log("Adding new playlist..")
            const {name, tracks, id} = props.playlist;
            addNewPlaylist(name, tracks, id);
        }
    }, []);

    useEffect(() => {
        if (previousTrackId.current !== props.currentTrackId) {
            previousTrackId.current = props.currentTrackId;
            playTrackById(props.currentTrackId);
        }
    }, [props.currentTrackId])

    function addNewPlaylist(name, tracks, id) {
        const newPlaylist = new Playlist(name, tracks, timeTrackCallback, id);
        setPlaylists([...playlists, newPlaylist]);
        if (currentPlaylist === null) {
            setCurrentPlaylist(newPlaylist);
            setCurrentTrack(newPlaylist.getCurrentTrackDetails());
        }
    }
    function timeTrackCallback(event) {
        const currentTime = event.target.currentTime;
        const duration = event.target.duration;

        setTrackTime(formatTime(currentTime));
        setTrackDuration(formatTime(duration));

        const ballPosition = (currentTime / duration) * 100
        progressBall.current.style.left=`${ballPosition - 2}%`;
    }

    function formatTime(duration) {   
        const mins = ~~((duration % 3600) / 60);
        const secs = ~~duration % 60;
        const ret = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
        return ret;
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
        setCurrentTrack(currentPlaylist.getCurrentTrackDetails());
    }

    function playTrackById(id) {
        currentPlaylist.playTrackById(id);
        setCurrentTrack(currentPlaylist.getCurrentTrackDetails());
        setIsPlaying(true);
    }

    return (
        <div id="music-bar">
            <div id="track-details">
                <img className="album-cover-icon" src={tempAlbumCover} alt=""/>
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
        </div>
    )
}

export default AudioManager;