const uuidv4 = require('uuid/v4');

export default class Plugin {
    manifest: Manifest;
    htmlSource: string;
    jsSource: string;

    id: string;
    left: number;
    top: number;

    constructor() {
        this.manifest = undefined;
        this.htmlSource = '';
        this.jsSource = '';
        this.id = uuidv4();
        this.left = 100;
        this.top = 100;
    }
}

export interface Manifest {
    manifestVersion: number;
    name: string;
    version: string;
    description: string;
    width: number;
    height: number;
}
