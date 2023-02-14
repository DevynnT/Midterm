import Album from "./Album";
import Artist from "./Artist";
import { IImportable } from "./Interfaces";
import Playlist from "./Playlist";
import Song from "./Song";

const cloudPlaylist = [
    { name: "The best album", artistName: "Owl City", year: 2009, tracks: ["Fireflies", "Vanilla Twilight"] },
    { name: "The second best album", artistName: "Owl City", year: 2012, tracks: ["Good Time", "When Can I See You Again?"] }
];

export class LocalImporter implements IImportable {
    path = "";

    constructor(path: string) {
        this.path = path
    }
    
    private addTracks(album: Album, tracks: string[]) {
        for (const trackName of tracks) {
            const song = new Song(trackName);
            album.addTrack(song);
        }
    }

    importPlaylist() { 
        const localPlaylist = require(this.path);

        console.log(`Your playlist from ${this.path} will be loaded`);

        const playlist: Playlist = new Playlist("Local Playlist");

        for (const albumData of localPlaylist.albums) {
            const artist = new Artist("Train");
            const album = new Album(albumData.name, artist, 2008);

            this.addTracks(album, albumData.tracks);

            playlist.addAlbum(album);
        }

        return playlist;
    }
}

export class CloudImporter implements IImportable {
    url = "";

    constructor(url: string) {
        this.url = url;
    }

    private addTracks(album: Album, tracks: string[]) {
        for (const trackName of tracks) {
            const song = new Song(trackName);
            album.addTrack(song);
        }
    }

    importPlaylist() {
        const playlist: Playlist = new Playlist("Cloud Playlist");

        console.log(`Importing playlist from ${this.url}`);

        for (const albumData of cloudPlaylist) {
            const artist = new Artist(albumData.artistName);
            const album = new Album(albumData.name, artist, albumData.year);

            this.addTracks(album, albumData.tracks);

            playlist.addAlbum(album);
        }

        return playlist;
    }
}