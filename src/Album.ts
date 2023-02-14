import Artist from "./Artist";
import Song from "./Song";

export default class Album {
    private _title = "";
    private _Artist: Artist;
    private _year: number;
    private _tracks: Song[] = [];

    constructor(title: string, artist: Artist, year: number) {
        this._title = title;
        this._Artist = artist;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get artist() {
        return this._Artist;
    }

    get year() {
        return this._year;
    }

    get tracks() {
        return this._tracks;
    }

    addTrack(track: Song) {
        this._tracks.push(track);
    }
}