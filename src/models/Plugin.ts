import { observable } from "mobx";

const uuidv4 = require('uuid/v4');

export type PluginDictionary = { [key: string]: Plugin };

export default class Plugin {
    manifest: Manifest = undefined;
    htmlSource: string = '';
    jsSource: string = '';

    id: string = uuidv4();
    @observable left: number = 100;
    @observable top: number = 100;
}

export interface Manifest {
    manifestVersion: number;
    name: string;
    version: string;
    description: string;
    width: number;
    height: number;
}
