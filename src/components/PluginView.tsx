
import React, { Component, RefObject } from 'react';
import Plugin from '../models/Plugin';

interface PluginViewProps {
    plugin: Plugin;
}

class PluginView extends Component<PluginViewProps> {

    constructor(props: PluginViewProps) {
        super(props);
    }

    componentDidMount() {
        let plugin: Plugin = this.props.plugin;
        new Function(plugin.jsSource)();
    }

    render() {
        const { plugin } = this.props;
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: plugin.htmlSource}} />
            </div>
        );
    }
}

export default PluginView;
