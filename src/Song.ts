export default class Song {
    private _title = "";

    constructor(title: string) {
        this._title = title;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }
}