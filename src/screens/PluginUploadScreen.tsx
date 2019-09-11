import React, {Component} from 'react';
import {Input, Form, Button} from 'antd';
import UploaderView from '../components/UploaderView';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';
import { HomeScreenStore } from '../stores/HomeScreenStore';
import LocalStorageUtil from '../storage/LocalStorageUtil';
import { Launcher } from '../common/Launcher';
import './HomeScreen2.css';


interface Props {
    form: any;
}

interface State {
}


interface HomeScreenProps {
    HomeScreenStore: HomeScreenStore;
}

interface HomeScreenState {
}

const {TextArea} = Input;


class PluginUploadScreen extends Component<HomeScreenProps, HomeScreenState>{

    componentDidMount() {
        Launcher.launch(this.props.HomeScreenStore);
    }

    render () {
        const { HomeScreenStore } = this.props;
        
        return (
            <DndProvider backend={HTML5Backend}>

                <div className="HomeScreenContainer">

                    <div className="Header">
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
                
                
                    <div className="Body">
                        <div className="FormContainerBackground">
                            <div className="FormContainer">
                                <Form>
                                    <Form.Item label="NAME">
                                        <Input 
                                            placeholder="Input your Plugin's name" 
                                            size="large" 
                                            allowClear
                                        />
                                    </Form.Item>

                                    <Form.Item label="DESCRIPTIONS">
                                        <TextArea
                                            placeholder="Input your Plugin's descriptions"
                                            rows={6}
                                        />
                                    </Form.Item>

                                    <Form.Item label="FILES">
                                        <UploaderView />
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>

                        <div className="subminBtnContainer">
                            <Button
                                onClick ={() => {
                            }}>Submit!</Button>
                        </div>
                        
                    </div>


                </div>
            </DndProvider>
            
                
        );
    }
}



export default PluginUploadScreen;