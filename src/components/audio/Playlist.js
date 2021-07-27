export default class Playlist {
    /**
     * @param {array} tracks
     * @param {string} name
     * @param {callback} timeTrackCallback
     * @param {number} id
     */
    constructor(name, tracks, timeTrackCallback, id) {
        this.tracks = tracks;
        this.currentTrackIndex = 0;
        this.name = name;
        this.id = id;
        this.timeTrackCallback = timeTrackCallback;
        this.updateCurrentTrack();
    }

    playTrackById(id) {
        const trackIndex = this.tracks.findIndex((track) => track.id === id);
        if (trackIndex !== -1) {
            this.currentTrackIndex = trackIndex;
            this.pause();
            this.currentTrack.currentTime=0;
            this.updateCurrentTrack();
            this.play();
        } else {
            console.warn("Could not find track with ID of", id);
        }
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
        const newTrack = new Audio(this.tracks[this.currentTrackIndex].fileName);
        newTrack.addEventListener("timeupdate", this.timeTrackCallback);
        this.currentTrack = newTrack;
    }

    pause() {this.currentTrack.pause();}
    play() {this.currentTrack.play();}
    getTracks() {return this.tracks;}
    getCurrentTrack() {return this.currentTrack;}
    getCurrentTrackDetails() {return this.tracks[this.currentTrackIndex];}
}