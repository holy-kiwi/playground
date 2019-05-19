
import React, { Component, RefObject } from 'react';
import Plugin from '../models/Plugin';

interface PluginViewProps {
    plugin: string;
}

class PluginView extends Component<PluginViewProps> {

    constructor(props: PluginViewProps) {
        super(props);
    }

    componentDidMount() {
        let plugin = this.props.plugin;
        plugin = plugin.replace(/\n/g, '');      // HTML Code 개행 제거 (정규표현식을 위해)
        const extractscript = /<script>(.+)<\/script>/gim.exec(plugin);
        if (extractscript) {
            plugin=plugin.replace(extractscript[0],"");
            new Function(extractscript[1])();
        }
    }

    render() {
        const { plugin } = this.props;
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: plugin}} />
            </div>
        );
    }
}

export default PluginView;
