import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './HomeScreen.css';
import UploaderView from '../components/UploaderView';
import DragAndDropZone from '../components/DragAndDropZone';
import { HomeScreenStore } from '../stores';
import { Launcher } from '../common/Launcher';
import { uploadPlugin } from '../models/Uploader';
import Plugin from '../models/Plugin';
import WhiteButton from '../components/WhiteButton';
import BlackButton from '../components/BlackButton';

let TESTMODE = false;
interface HomeScreenProps {
    HomeScreenStore?: HomeScreenStore;
    location: Location;
}

interface HomeScreenState {
}
@inject('HomeScreenStore') @observer
class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {

    constructor(props) {
        super(props);
        let params = new URLSearchParams(props.location.search);
        if (params.get('testmode') === 'true') {
            TESTMODE = true;
        }
    }

    componentDidMount() {
        Launcher.launch(this.props.HomeScreenStore);
        // console.log(this.props.HomeScreenStore.plugins);
        this.props.HomeScreenStore.setEditMode(false);
    }

    onUpload = (acceptedFiles: File[]) => {
        uploadPlugin(acceptedFiles, (plugin: Plugin) => {
            this.props.HomeScreenStore.addPlugin(plugin);
        });
    }

    render() {
        const { HomeScreenStore } = this.props;
        return (
            <DndProvider backend={HTML5Backend}>
                <div className="HomeScreenContainer">
                    {TESTMODE && <UploaderView onUpload={this.onUpload} style={{position:'absolute', bottom: 0, right:0, width: 300, height: 100}}/>}
                    <div className="homescreen-HeaderContainer">
                        {'PLAYGROUND'}
                        <div className="homescreen-MenuButtonContainer">
                            <Link to='/'><WhiteButton label={'HOME'}/></Link>
                            <Link to='/store'><BlackButton label={'STORE'}/></Link>
                            <BlackButton onClick={() => { HomeScreenStore.toggleEditMode() }} label={'EDIT'} />
                            {TESTMODE && <BlackButton onClick={() => {
                                HomeScreenStore.setPlugins({});
                                localStorage.clear();
                            }} label={'RESET'} />}
                        </div>
                    </div>
                    <DragAndDropZone />
                </div>
            </DndProvider>
        )
    }
}

export default HomeScreen;
