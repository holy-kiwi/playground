import React, { Component } from 'react';
import PluginAgent from '../agent/PluginAgent';
import Plugin from '../models/Plugin';
import { HomeScreenStore } from '../stores';
import { InjectedComponent } from '../common';
import { match, withRouter } from 'react-router';
import PluginDetail from '../presentational/PluginDetail';

interface Props {
    HomeScreenStore: HomeScreenStore;
    match: match<{ id: string }>;
}

interface State {
    plugin: Plugin;
    loading: boolean;
}

class PluginDetailContainer extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            plugin: undefined,
            loading: true,
        }
    }

    async componentDidMount() {
        const plugin: Plugin = await PluginAgent.fetchPlugin(this.props.match.params.id);
        this.setState({
            plugin,
            loading: false,
        });
    }

    onDownload = async (pluginId: string) => {
        const plugin: Plugin = await PluginAgent.fetchPlugin(pluginId);
        console.log(plugin);
        this.props.HomeScreenStore.addPlugin({ ...plugin, left: 100, top: 100 });
    }

    render() {
        return <PluginDetail {...this.state} onDownload={() => this.onDownload(this.props.match.params.id)} />
    }
}

export default withRouter(InjectedComponent(PluginDetailContainer, HomeScreenStore));
