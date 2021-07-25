import Playlist from './Playlist';
class AudioManager {
    /**
     * A Playlist instance is required to start AudioManager
     * @param {object} playlist 
     */
    constructor() {
        this.playlists = [];
        this.currentPlaylist = null;
        this.timeTrackCallback = this.timeTrackCallback.bind(this);
    }
    addNewPlaylist(name, tracks) {
        this.playlists.push(new Playlist(name, tracks, this.timeTrackCallback));
        if (!this.currentPlaylist) {
            this.currentPlaylist = this.playlists[0];
        }
    }
    updateCurrentPlaylist(id) {
        const playlist = this.playlists.find((playlist) => playlist.id === id);
        if (playlist) {
            this.currentPlaylist = playlist;
        } else {
            console.error("AudioManager: Failed to update current playlist, not found", id);
        }
    }
    timeTrackCallback(event) {
        const duration = event.target.currentTime;
        const currTime = this.formatTime(duration);
        document.getElementById('track-time').innerText=currTime;
    }

    formatTime(duration) {   
        const mins = ~~((duration % 3600) / 60);
        const secs = ~~duration % 60;
        const ret = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
        return ret;
    }

    pauseTrack() {this.currentPlaylist.pause();}
    previousTrack() {this.currentPlaylist.skip('left');}
    nextTrack() {this.currentPlaylist.skip('right');}
    playTrack() {this.currentPlaylist.play();}
    getCurrentTrackDetails() {return this.currentPlaylist.getCurrentTrackDetails();}
}

export default AudioManager;