import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PluginAgent from '../agent/PluginAgent';
import Plugin from '../models/Plugin';
import { HomeScreenStore } from '../stores';
import PluginList from '../presentational/PluginList';

interface Props {
    HomeScreenStore?: HomeScreenStore;
}

interface State {
    plugins: Plugin[];
    pluginsLoading: boolean;
}

@inject('HomeScreenStore') @observer
class PluginListContainer extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            plugins: [],
            pluginsLoading: true,
        }
    }

    async componentDidMount() {
        const plugins: Plugin[] = await PluginAgent.fetchPlugins();
        this.setState({
            plugins,
            pluginsLoading: false,
        })
    }

    onDownload = async (pluginId: string) => {
        const plugin: Plugin = await PluginAgent.fetchPlugin(pluginId);
        this.props.HomeScreenStore.addPlugin({ ...plugin, left: 100, top: 100 });
    }

    render() {
        return <PluginList {...this.state} onDownload={this.onDownload} />
    }
}

export default PluginListContainer;
