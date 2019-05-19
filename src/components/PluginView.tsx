
import React, { Component, RefObject } from 'react';
import Plugin from '../models/Plugin';

interface PluginViewProps {
    plugin: string;
}

class PluginView extends Component<PluginViewProps> {
    script: RefObject<any>;
    constructor(props: PluginViewProps) {
        super(props);
        this.script = React.createRef();
    }
    componentDidMount() {
        const script = document.getElementById('playground-script').innerHTML;
        window.eval(script);
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
