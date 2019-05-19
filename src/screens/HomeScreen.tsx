import React, { Component } from 'react';
import './HomeScreen.css';
import UploaderView from '../components/UploaderView';
import PluginView from '../components/PluginView';
import Plugin from '../models/Plugin';

interface HomeScreenState {
    plugins: string[];
}

class HomeScreen extends Component<{}, HomeScreenState> {
    constructor(props: any) {
        super(props);
        this.state = {
            plugins: [],
        }
    }

    addPlugin = (plugin: string) => {
        this.setState({
            plugins: [...this.state.plugins, plugin],
        });
    }

    render() {
        const { plugins } = this.state;
        return (
            <div className="HomeScreenContainer">
                <UploaderView onUpload={this.addPlugin} />
                {
                    plugins && plugins.map((item: string, index: number) =>
                        <PluginView key={index} plugin={item}/>
                    )
                }
            </div>
        )
    }
}

export default HomeScreen;