import Playlist from './Playlist';
class AudioManager {
    /**
     * A Playlist instance is required to start AudioManager
     * @param {object} playlist 
     */
    constructor(playlist) {
        this.playlists = [playlist];
        this.currentPlaylist = playlist;
    }
    addNewPlaylist(name, tracks) {
        this.playlists.push(new Playlist(name, tracks));
    }
    updateCurrentPlaylist(id) {
        const playlist = this.playlists.find((playlist) => playlist.id === id);
        if (playlist) {
            this.currentPlaylist = playlist;
        } else {
            console.error("AudioManager: Failed to update current playlist, not found", id);
        }
    }
    //this.currentTrack.addEventListener("timeupdate", (event) => {this.refresh(event.currentTime)});
    pauseTrack() {this.currentPlaylist.pause();}
    previousTrack() {this.currentPlaylist.skip('left');}
    nextTrack() {this.currentPlaylist.skip('right');}
    playTrack() {this.currentPlaylist.play();}
    getCurrentTrackDetails() {return this.currentPlaylist.getCurrentTrackDetails();}
}

export default AudioManager;