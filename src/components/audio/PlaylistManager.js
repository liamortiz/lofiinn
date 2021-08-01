import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentTrack } from "../../redux/actions/audioActions";

const playlistProps = {tracks: PropTypes.array.isRequired}

const PlaylistManager = (props) => {

    const [showPlaylistWindow, setShowPlaylistWindow] = useState(false);
    const playlistWindow = useRef(null);
    const currentlyPlayingTrack = useSelector(state => state.audio.currentRougeTrack);
    const dispatch = useDispatch();

    useEffect(() => {
        playlistWindow.current.style=(showPlaylistWindow ? "height: 86%" : "height: 45px");
    }, [showPlaylistWindow]);

    return (
        <div id="playlist-manager-wrapper" ref={playlistWindow}>
            <div id="playlist-title" onClick={() => setShowPlaylistWindow(!showPlaylistWindow)}>
                <h2>Default Playlist</h2>
            </div>
            <div id="pm-track-wrapper">

                {props.tracks.map(track => (
                <div key={track.id} className={`pm-track-container ${track.id === currentlyPlayingTrack?.id ? 'track-playing' : ''}`} onClick={() => dispatch(updateCurrentTrack(track))}>
                    <img src={track.cover} alt=""/>
                    <p className="track-name">{track.name}</p>
                    <p className="track-artist">{track.artist}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

PlaylistManager.propTypes = playlistProps;

export default PlaylistManager;