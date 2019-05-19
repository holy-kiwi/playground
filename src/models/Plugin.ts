export default class Plugin {
    manifest: Manifest;
    htmlSource: string;
    jsSource: string;

    constructor() {
        this.manifest = undefined;
        this.htmlSource = '';
        this.jsSource = '';
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
