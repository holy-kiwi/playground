import { observable, action } from 'mobx';
import Plugin, { PluginDictionary } from '../models/Plugin';
import LocalStorageUtil from '../storage/LocalStorageUtil';

export class HomeScreenStore {
    static NAME = 'HomeScreenStore';

    @observable plugins: PluginDictionary = {};
    @observable isEditMode: boolean = false;

    @action setPlugins(pluginDictionary: PluginDictionary) {
        this.plugins = pluginDictionary;
        LocalStorageUtil.setPlugins(this.plugins);
    }

    @action addPlugin(plugin: Plugin) {
        const { plugin_id } = plugin;
        this.plugins[plugin_id] = plugin;
        // 로컬스토리지에 플러그인 저장
        LocalStorageUtil.setPlugins(this.plugins);
    }

    @action deletePlugin(id: string) {
        if (!(id in this.plugins)) return;
        delete this.plugins[id];
        LocalStorageUtil.setPlugins(this.plugins);
    }

    @action changePlugin(id: string, left: number, top: number) {
        if (!(id in this.plugins)) return;
        if (left !== undefined) this.plugins[id].left = left;
        if (top !== undefined) this.plugins[id].top = top;
        LocalStorageUtil.setPlugins(this.plugins);
    }

    @action toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    @action setEditMode(isEditMode: boolean) {
        this.isEditMode = isEditMode;
    }
}
