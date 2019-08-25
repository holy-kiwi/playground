import { observable, action, computed } from 'mobx';
import Plugin from '../models/Plugin';

export class HomeScreenStore {
    static NAME = 'HomeScreenStore';

    @observable plugins: { [key: string]: Plugin } = {};
    @observable isEditMode: boolean = false;

    @action addPlugin(plugin: Plugin) {
        const { id } = plugin;
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
