import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import UploaderView from '../components/UploaderView';
import Container from '../components/Container';
import { InjectedComponent } from '../common';
import { HomeScreenStore } from '../stores';
import { Launcher } from '../common/Launcher';
import LocalStorageUtil from '../storage/LocalStorageUtil';

interface HomeScreenProps {
    HomeScreenStore: HomeScreenStore;
}

interface HomeScreenState {
}

class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {

    componentDidMount() {
        Launcher.launch(this.props.HomeScreenStore);
    }

    render() {
        const { HomeScreenStore } = this.props;
        return (
            <div className="HomeScreenContainer">
                <UploaderView />
                <Container />
                <div className="MenuContainer">
                    <Link to='/store'><button>스토어</button></Link>
                    <button onClick={() => { HomeScreenStore.toggleEditMode() }}>편집</button>
                    <button onClick={() => {
                        HomeScreenStore.setPlugins({});
                        LocalStorageUtil.setPlugins(HomeScreenStore.plugins);
                        localStorage.clear();
                    }}>초기화</button>
                </div>
            </div>
        )
    }
}

export default InjectedComponent(HomeScreen, HomeScreenStore);
