import './_audio.scss';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { updateCurrentTrack } from '../../redux/actions/audioActions';

/*
Queues and Playlists are used to maintain the stream of music.
If a user clicks on a track not inside a user owned playlist, it will be added to the current Queue.
Playlists are used as a source of refrence.

The main difference between a queue and a playlist is, a playlist contains all owned tracks.
A queue contains unrelated tracks.
A new playlist can be created from the queue.
*/

const audioManagerProps = {playlists: PropTypes.array.isRequired};

const AudioManager = (props) => {
    const [playQueue, setPlayQueue] = useState(props.playlists[0].getTracks());
    const [currentTrack, setCurrentTrack] = useState(null);
    const [trackTime, setTrackTime] = useState("0:00");
    const [trackDuration, setTrackDuration] = useState("0:00");
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentRougeTrack = useSelector(state => state.audio.currentRougeTrack);
    const progressBall = useRef(null);
    const playButton = useRef(null);

    useEffect(() => {
        loadTrackAudio(playQueue[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        playRougeTrack(currentRougeTrack);
    }, [currentRougeTrack]);

    const playRougeTrack = (track) => {
        if (typeof track !== 'object') return;
        const trackIndex = playQueue.findIndex((_track) => _track.id === track.id);
        if (trackIndex !== -1) {
            setCurrentTrackIndex(trackIndex);
            loadTrackAudio(playQueue[trackIndex]).play();
        } else {
            setPlayQueue([...playQueue, track]);
            setCurrentTrackIndex(playQueue.length);
            loadTrackAudio(track).play();
        }
        setIsPlaying(true);    
    }

    function loadTrackAudio(track) {
        if (currentTrack) {
            currentTrack.currentTime = 0;
            currentTrack.pause();
        }
        const audioFile = new Audio(track.fileName);
        audioFile.addEventListener('loadeddata', timeTrackCallback);
        audioFile.addEventListener('timeupdate', timeTrackCallback);
        audioFile.addEventListener('ended', ()=> setIsPlaying(false));
        setCurrentTrack(audioFile);

        return audioFile;
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
            currentTrack.pause();
        } else {
            currentTrack.play();
        }
        setIsPlaying(!isPlaying);
    }

    function skipTrack(direction) {
        if (!isPlaying) setIsPlaying(true);

        let newTrackIndex = currentTrackIndex;
        if (direction==='right' && currentTrackIndex + 1 < playQueue.length) newTrackIndex+=1;
        if (direction==='left' && currentTrackIndex - 1 >= 0) newTrackIndex-=1;

        setCurrentTrackIndex(newTrackIndex);
        loadTrackAudio(playQueue[newTrackIndex]).play();
    }

    return (
        <div id="music-bar">
            <div id="track-details">
                <img className="album-cover-icon" src={playQueue[currentTrackIndex]?.cover} alt=""/>
                <div id="track-info">
                <p className="track-name">{playQueue[currentTrackIndex]?.name}</p>
                <p className="artist-name">{playQueue[currentTrackIndex]?.artist}</p>
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
};

AudioManager.propTypes = audioManagerProps;

export default AudioManager;