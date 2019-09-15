import Plugin from "../models/Plugin"
import axios from 'axios';
const API_URL_BASE = 'https://ankxg1c1n7.execute-api.ap-northeast-2.amazonaws.com/dev';
const API_URL_PLUGIN_ALL = `${API_URL_BASE}/plugin-all`
const API_URL_PLUGIN = `${API_URL_BASE}/plugin`

class PluginAgent {
    async fetchPlugins(): Promise<Plugin[]> {
        const result = await axios.get(API_URL_PLUGIN_ALL);
        const items = result.data.data.Items;
        let plugins: Plugin[] = items.map(item => {
            item.manifest = JSON.parse(item.manifest);
            return item;
        });
        return plugins;
    }

    async fetchPlugin(plugin_id): Promise<Plugin> {
        const url = `${API_URL_PLUGIN}/${plugin_id}`;
        const result = await axios.get(url);
        const my_plugin: Plugin = result.data.data.Item;
        const new_manifest = JSON.parse(result.data.data.Item.manifest);
        my_plugin.manifest = new_manifest;

        return my_plugin;
    }

    async uploadPlugin(plugin: Plugin): Promise<void> {
        const pluginRequest: object = plugin;
        pluginRequest['manifest'] = JSON.stringify(plugin.manifest);
        // console.log(JSON.stringify(pluginRequest));
        await axios.post(API_URL_PLUGIN, JSON.stringify(pluginRequest));
    }
}

export default new PluginAgent();
