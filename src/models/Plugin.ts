import { observable } from "mobx";
import uuidv4 from 'uuid/v4';

export type PluginDictionary = { [key: string]: Plugin };

export default class Plugin {
    manifest: Manifest = undefined;
    htmlSource?: string = '';
    jsSource?: string = '';

    plugin_id?: string = uuidv4();
    @observable left?: number = 100;
    @observable top?: number = 100;
}

export interface Manifest {
    manifestVersion: number;
    name: string;
    version: string;
    description: string;
    width: number;
    height: number;
    image: string;
}
