import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentTrack } from "../../redux/actions/audioActions";

const PlaylistContainer = ({playlist}) => {
    const [expanded, setExpanded] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentlyPlayingTrack = useSelector(state => state.audio.currentRougeTrack);
    const dispatch = useDispatch();

    const tracks = playlist.getTracks();

    const playTrack = (track) => {
        setIsPlaying(true);
        dispatch(updateCurrentTrack(track));
    }

    return (
        <>
        <div className="playlist-box">
            <ul>
                <img src={tracks[0].cover} alt=""/>
                <h6>{playlist.name}</h6>
                <div className="playlist-controls">
                    <button className={`icon ${expanded ? 'expanded-playlist' : 'expand-playlist' }`} onClick={() => setExpanded(!expanded)}></button>
                    <button className={`icon ${isPlaying ? 'playlist-pause' : 'play-playlist'}`} onClick={() => setIsPlaying(!isPlaying)}></button>
                </div>
            </ul>
        </div>
        {
            expanded &&
            <div className="pm-track-wrapper">
                {tracks.map(track => (
                <div key={track.id} className={`pm-track-container ${track.id === currentlyPlayingTrack?.id ? 'track-playing' : ''}`} onClick={() => playTrack(track)}>
                    <img src={track.cover} alt=""/>
                    <p className="track-name">{track.name}</p>
                    <p className="track-artist">{track.artist}</p>
                </div>
                ))}
            </div>
        }
    </>
    )
}

export default PlaylistContainer;