import { IImportable } from "./Interfaces";

export default class PlaylistImporter {
    private _importer: IImportable;

    constructor(importer: IImportable) {
        this._importer = importer;
    }

    importPlaylist() {
        return this._importer.importPlaylist();
    }
}