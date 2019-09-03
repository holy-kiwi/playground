import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { Button } from 'antd';
import HTML5Backend from 'react-dnd-html5-backend';
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
            <DndProvider backend={HTML5Backend}>
                <div className="HomeScreenContainer">
                    <UploaderView />
                    <Container />
                    <div className="MenuContainer">
                        <Link to='/store'><Button type="primary">스토어</Button></Link>
                        <Button onClick={() => { HomeScreenStore.toggleEditMode() }}>편집</Button>
                        <Button onClick={() => {
                            HomeScreenStore.setPlugins({});
                            LocalStorageUtil.setPlugins(HomeScreenStore.plugins);
                            localStorage.clear();
                        }}>초기화</Button>
                    </div>
                </div>
            </DndProvider>
        )
    }
}

export default InjectedComponent(HomeScreen, HomeScreenStore);
