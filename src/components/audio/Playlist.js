import { v4 as uuidv4 } from 'uuid';

export default class Playlist {
    /**
     * @param {array} tracks
     * @param {string} name
     */
    constructor(name, tracks, timeTrackCallback) {
        this.tracks = tracks;
        this.currentTrackIndex = 0;
        this.name = name;
        this.id = `${name}-${uuidv4()}`
        this.timeTrackCallback = timeTrackCallback;
        this.updateCurrentTrack();
    }
    /**
     * @param {string} direction 
     */
     skip(direction) {
        this.pause();
        this.currentTrack.currentTime=0;
        
        if (direction==='right') this.currentTrackIndex++;
        if (direction==='left') this.currentTrackIndex--;

        if (this.currentTrackIndex >= this.tracks.length || this.currentTrackIndex < 0) {
            this.currentTrackIndex = 0;
        }
        
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