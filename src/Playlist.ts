import Album from "./Album";
import Song from "./Song";

export default class Playlist {
    private _name = "";
    private _songs: Song[] = [];

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    addAlbum(album: Album) {
        for (const song of album.tracks) {
            this._songs.push(song);
        }
    }
}