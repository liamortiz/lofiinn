import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

import PlaylistContainer from "./PlaylistContainer";

const playlistProps = {playlists: PropTypes.array.isRequired}

const PlaylistManager = (props) => {

    const [showPlaylistWindow, setShowPlaylistWindow] = useState(false);
    const playlistWindow = useRef(null);
    
    useEffect(() => {
        playlistWindow.current.style=(showPlaylistWindow ? "height: 86%" : "height: 45px");
    }, [showPlaylistWindow]);

    return (
        <div id="playlist-manager-wrapper" ref={playlistWindow}>
            <div id="playlist-title" onClick={() => setShowPlaylistWindow(!showPlaylistWindow)}>
                <h2>Playlists</h2>
            </div>
            <div className="playlists-container">
                {props.playlists.map(playlist => <PlaylistContainer key={playlist.id} playlist={playlist}/>)}
            </div>
        </div>
    )
}

PlaylistManager.propTypes = playlistProps;

export default PlaylistManager;