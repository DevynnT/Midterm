import Album from "./Album";
import Playlist from "./Playlist";

export interface IImportable {
    importPlaylist(): Playlist;
}