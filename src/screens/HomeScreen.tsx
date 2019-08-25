import React, { Component } from 'react';
import './HomeScreen.css';
import UploaderView from '../components/UploaderView';
import Container from '../components/Container';
import { InjectedComponent } from '../common';
import { HomeScreenStore } from '../stores';

interface HomeScreenProps {
    HomeScreenStore: HomeScreenStore;
}

interface HomeScreenState {
}

class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {

    render() {
        const { HomeScreenStore } = this.props;
        return (
            <div className="HomeScreenContainer">
                <UploaderView />
                <Container />
                <button style={{ position: 'absolute', right: 20, top: 20, }} onClick={() => { HomeScreenStore.toggleEditMode() }}>편집</button>
            </div>
        )
    }
}

export default InjectedComponent(HomeScreen, HomeScreenStore);
