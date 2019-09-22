
import React, { Component } from 'react';
import Plugin from '../models/Plugin';

interface PluginViewProps {
    plugin: Plugin;
    style?: React.CSSProperties;
}

class PluginView extends Component<PluginViewProps> {

    componentDidMount() {
        const { plugin } = this.props;

        try {
            new Function(
                'request',
                'cheerio',
                `return () => { ${plugin.jsSource} }`
            )(require('request'), require('cheerio'))();
        } catch (error) {
            alert(`${plugin.manifest.name} 플러그인에 에러가 있습니다. 개발자도구의 콘솔을 확인해주세요.`);
            console.error(error);
        }
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
