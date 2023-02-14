import Album from "./Album";
import Artist from "./Artist";
import {  CloudImporter, LocalImporter } from "./Importers";
import Playlist from "./Playlist";
import PlaylistImporter from "./PlaylistImporter";
import Song from "./Song";
import User from "./User";

const localPlaylistPath = "../localPlaylist.json";
const cloudPlaylistUrl = "www.youtube.com";

let artist = new Artist("Muse");
let album = new Album("The 2nd Law", artist, 2012);
let song = new Song("Madness");
album.addTrack(song);

let playlist = new Playlist("Fun songs");
playlist.addAlbum(album);

let localPlaylistImporter = new PlaylistImporter(
    new LocalImporter(localPlaylistPath)
);

let cloudPlaylistImporter = new PlaylistImporter(
    new CloudImporter(cloudPlaylistUrl)
);

let localPlaylist = localPlaylistImporter.importPlaylist();
let cloudPlaylist = cloudPlaylistImporter.importPlaylist();

let user = new User("john123", "password123");

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log("Getting Playlists...");
console.log(user.getPlaylists());

console.log("Getting albums...");
console.log(user.getAlbums());

console.log("Getting songs...");
console.log(user.getSongs());