import { PluginDictionary } from "../models/Plugin";

const KEY_PLUGINS_V1: string = 'key:plugins_v1';

class LocalStorageUtil {
    getPlugins = (): PluginDictionary => {
        try {
            const pluginDictionaryString: string = localStorage.getItem(KEY_PLUGINS_V1);
            return JSON.parse(pluginDictionaryString);
        } catch (error) {
            console.log("[LocalStorageUtil getPlugins] error = ", error);
            return undefined;
        }
    }

    setPlugins = (pluginDictionary: PluginDictionary) => {
        localStorage.setItem(KEY_PLUGINS_V1, JSON.stringify(pluginDictionary));
    }
}

export default new LocalStorageUtil();
