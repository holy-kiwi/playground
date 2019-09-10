import { observable, action } from 'mobx';
import Plugin, { PluginDictionary } from '../models/Plugin';

export class HomeScreenStore {
    static NAME = 'HomeScreenStore';

    @observable plugins: PluginDictionary = {};
    @observable isEditMode: boolean = false;

    @action setPlugins(pluginDictionary: PluginDictionary) {
        this.plugins = pluginDictionary;
    }

    @action addPlugin(plugin: Plugin) {
        const { plugin_id: id } = plugin;
        this.plugins[id] = plugin;
    }

    @action changePlugin(id: string, left: number, top: number) {
        if (!(id in this.plugins)) return;
        if (left !== undefined) this.plugins[id].left = left;
        if (top !== undefined) this.plugins[id].top = top;
    }

    @action toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }
}
