
import React, { Component } from 'react';
import Plugin from '../models/Plugin';

interface PluginViewProps {
    plugin: Plugin;
    style?: React.CSSProperties;
}

class PluginView extends Component<PluginViewProps> {

    componentDidMount() {
        const { plugin } = this.props;

        new Function(
            'request',
            'cheerio',
            `return function() { ${plugin.jsSource} }`
        )(require('request'), require('cheerio'))();
    }

    render() {
        const { plugin } = this.props;
        return (
            <div style={{ ...this.props.style, width: plugin.manifest.width, height: plugin.manifest.height }}>
                <div dangerouslySetInnerHTML={{ __html: plugin.htmlSource }} />
            </div>
        );
    }
}

export default PluginView;
