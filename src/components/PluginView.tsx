
import React, { Component } from 'react';
import Plugin from '../models/Plugin';

interface PluginViewProps {
    plugin: Plugin;
}

class PluginView extends Component<PluginViewProps> {
    render() {
        const { plugin } = this.props;
        return (
            <div>
                <div>{plugin && plugin.name}</div>
            </div>
        );
    }
}

export default PluginView;
