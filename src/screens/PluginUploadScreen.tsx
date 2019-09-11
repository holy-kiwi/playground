import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import UploaderView from '../components/UploaderView';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';
import LocalStorageUtil from '../storage/LocalStorageUtil';
import { Launcher } from '../common/Launcher';
import './HomeScreen2.css';


interface Props {

}

interface State {
}

const { TextArea } = Input;

class PluginUploadScreen extends Component<Props, State>{

    componentDidMount() {

    }

    render() {

        return (
            <DndProvider backend={HTML5Backend}>

                <div className="HomeScreenContainer">

                    <div className="header">

                        <div className="title_container">
                            <h1>플러그인 스토어</h1>
                        </div>

                        <div className="btn_container1">
                            <Button type="primary" size="large" shape="round">정보</Button>
                            <Button type="primary" size="large">유틸리티</Button>
                            <Button type="primary" size="large">추천순</Button>
                        </div>

                    </div>
                    {/* end of header */}


                    <div className="btn_container2">
                        <Link to={"/"}>
                            <button className="home_btn">홈</button>
                        </Link>
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
                                onClick={() => {
                                }}>Submit!</Button>
                        </div>

                    </div>


                </div>
            </DndProvider>


        );
    }
}



export default PluginUploadScreen;