import LocalStorageUtil from "../storage/LocalStorageUtil";
import { HomeScreenStore } from "../stores";

class LauncherClass {
    launch(HomeScreenStore: HomeScreenStore) {
        const pluginDictionary = LocalStorageUtil.getPlugins();
        if (pluginDictionary !== null) {
            HomeScreenStore.setPlugins(pluginDictionary);
        }
    }
}

export const Launcher = new LauncherClass();
