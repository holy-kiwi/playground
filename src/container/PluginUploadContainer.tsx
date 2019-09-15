import React, { Component } from 'react';
import PluginAgent from '../agent/PluginAgent';
import Plugin from '../models/Plugin';
import PluginList from '../presentational/PluginList';

interface Props {

}

interface State {
    plugins: Plugin[];
    pluginsLoading: boolean;
}

class PluginUploadContainer extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            plugins: [],
            pluginsLoading: true,
        }
    }

    onDownload = async (pluginId: string) => {
        const plugin: Plugin = await PluginAgent.fetchPlugin(pluginId);
    }

    render() {
        return <PluginList {...this.state} onDownload={this.onDownload} />
    }
}

export default PluginUploadContainer;
