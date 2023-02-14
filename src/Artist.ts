import Album from "./Album";

export default class Artist {
    private _name = "";
    private _albums: Album[] = [];

    constructor(name: string) {
        this._name = name;
    }

    addAlbum(album: Album) {
        this._albums.push(album);
    }
}