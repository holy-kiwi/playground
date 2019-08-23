
import React, { Component } from 'react';
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
        new Function(
            'request',
            'cheerio',
            plugin.jsSource
        )(require('request'), require('cheerio'))();
    }

    render() {
        const { plugin } = this.props;
        return (
            <div style={{ width: plugin.manifest.width, height: plugin.manifest.height }}>
                <div dangerouslySetInnerHTML={{ __html: plugin.htmlSource }} />
            </div>
        );
    }
}

export default PluginView;
