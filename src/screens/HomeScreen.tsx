import React, { Component } from 'react';
import './HomeScreen.css';
import update from 'immutability-helper'
import UploaderView from '../components/UploaderView';
import Plugin from '../models/Plugin';
import Container from '../components/Container';

interface HomeScreenState {
    plugins: { [key: string]: Plugin };
}

class HomeScreen extends Component<{}, HomeScreenState> {
    constructor(props: any) {
        super(props);
        this.state = {
            plugins: {},
        }
    }

    addPlugin = (plugin: Plugin) => {
        const { id } = plugin;
        this.setState({
            plugins: {
                ...this.state.plugins,
                [id]: plugin,
            }
        });
    }

    setPlugin = (id: string, left: number, top: number) => {
        this.setState({
            plugins: update(
                this.state.plugins,
                {
                    [id]: {
                        $merge: { left, top }
                    }
                }
            ),
        });
    }

    render() {
        const { plugins } = this.state;
        return (
            <div className="HomeScreenContainer">
                <UploaderView onUpload={this.addPlugin} />
                <Container plugins={plugins} setPlugin={this.setPlugin} />
            </div>
        )
    }
}

export default HomeScreen;