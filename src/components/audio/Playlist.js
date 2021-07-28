export default class Playlist {
    /**
     * @param {array} tracks
     * @param {string} name
     * @param {number} id
     */
    constructor(name, tracks, id) {
        this.tracks = tracks;
        this.currentTrackIndex = 0;
        this.name = name;
        this.id = id;
    }

    initialize() {
        this.updateCurrentTrack();
    }

    playTrackById(id) {
        const trackIndex = this.tracks.findIndex((track) => track.id === id);

        if (trackIndex === -1) return false;

        this.currentTrackIndex = trackIndex;
        this.pause();
        this.currentTrack.currentTime=0;
        this.updateCurrentTrack();
        this.play();
        return true;
    }

    /**
     * @param {string} direction 
     */
     skip(direction) {
        if (direction==='right') this.currentTrackIndex++;
        if (direction==='left') this.currentTrackIndex--;

        if (this.currentTrackIndex >= this.tracks.length || this.currentTrackIndex < 0) {
            this.currentTrackIndex = 0;
        }
        this.currentTrack.currentTime=0;
        this.pause();
        this.updateCurrentTrack();
        this.play();
    }

    updateCurrentTrack() {
        this.currentTrack = new Audio(this.tracks[this.currentTrackIndex].fileName);
    }

    pause() {this.currentTrack.pause();}
    play() {this.currentTrack.play();}
    getTracks() {return this.tracks;}
    getCurrentTrack() {return this.currentTrack;}
    getCurrentTrackDetails() {return this.tracks[this.currentTrackIndex];}
}