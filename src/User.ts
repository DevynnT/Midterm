import Album from "./Album";
import Playlist from "./Playlist";

export default class User {
    private _username = "";
    private _password = "";
    private _playlists: Playlist[] = [];
    private _albums: Album[] = [];

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    get username() {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }

    get password() {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    addPlaylist(playlist: Playlist) {
        this._playlists.push(playlist);
    }

    addAlbum(album: Album) {
        this._albums.push(album);
    }

    getSongs() {
        const songNames = [];

        for (const album of this._albums) {
            for (const song of album.tracks) {
                songNames.push(song.title);
            }
        }

        console.log(`Your songs are: ${songNames}`);
    }

    getAlbums() {
        const albumNames = [];

        for (const album of this._albums) {
            albumNames.push(album.title);
        }

        console.log(`Your albums are: ${albumNames}`);
    }

    getPlaylists() {
        const playlistNames = [];

        for(const playlist of this._playlists) {
            playlistNames.push(playlist.name);
        }

        console.log(`Your playlists are: ${playlistNames}`);
    }
}