import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { Button } from 'antd';
import HTML5Backend from 'react-dnd-html5-backend';
import './HomeScreen.css';
import UploaderView from '../components/UploaderView';
import Container from '../components/Container';
import { HomeScreenStore } from '../stores';
import { Launcher } from '../common/Launcher';
import LocalStorageUtil from '../storage/LocalStorageUtil';
import { uploadPlugin } from '../models/Uploader';
import Plugin from '../models/Plugin';

const TESTMODE = false;
interface HomeScreenProps {
    HomeScreenStore?: HomeScreenStore;
}

interface HomeScreenState {
}
@inject('HomeScreenStore') @observer
class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {

    componentDidMount() {
        Launcher.launch(this.props.HomeScreenStore);
    }

    onUpload = (acceptedFiles: File[]) => {
        uploadPlugin(acceptedFiles, (plugin: Plugin) => {
            this.props.HomeScreenStore.addPlugin(plugin);
            // 플러그인 저장
            LocalStorageUtil.setPlugins(this.props.HomeScreenStore.plugins);
        });
    }

    render() {
        const { HomeScreenStore } = this.props;
        return (
            <DndProvider backend={HTML5Backend}>
                <div className="HomeScreenContainer">
                    {TESTMODE && <UploaderView onUpload={this.onUpload} />}
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

export default HomeScreen;
