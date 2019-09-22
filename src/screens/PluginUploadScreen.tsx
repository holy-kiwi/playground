import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import UploaderView from '../components/UploaderView';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';

import './PluginUploadScreen.css';
import { uploadPlugin } from '../models/Uploader';
import Plugin from '../models/Plugin';
import PluginAgent from '../agent/PluginAgent';
import { History } from 'history';
import { withRouter } from 'react-router';

interface Props {
    history: History;
}

interface State {
    plugin: Plugin;
}

const { TextArea } = Input;

class PluginUploadScreen extends Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {
            plugin: undefined,
        }
    }

    onUpload = (acceptedFiles: File[]) => {
        uploadPlugin(acceptedFiles, (plugin: Plugin) => {
            this.setState({
                plugin,
            });
        });
    }

    onSubmit = async () => {
        if (this.state.plugin === undefined) {
            alert('플러그인을 업로드해주세요!');
            return;
        }
        await PluginAgent.uploadPlugin(this.state.plugin);
        alert('플러그인이 업로드되었습니다.');
        this.props.history.push('/store');
    }

    render() {
        const { plugin } = this.state;

        return (
            <DndProvider backend={HTML5Backend}>

                <div className="uploadScreenContainer">
                    
                    <div className="header">
                        <Link to={"/"}>{'PLAYGROUND'}</Link>
                        <div className="search_container">
                            <input className="search_bar" placeholder="Search Plugins!" />
                            <div className="search_btn"> </div>
                        </div>
                    </div>

                    <div className="under_header">
                        <div className="description">PLUG-IN 업로드</div>
                        <div className="btn_container">
                            <Link to="/upload" id="upload">
                            <button className="upload_btn">업로드</button>
                            </Link>
                            <Link to="/guide">
                            <button className="develop_guide_btn">개발가이드</button>
                            </Link>
                        </div>
                    </div>

                    <div className="upload">
                        제목
                        <br/>
                        <input className="name" placeholder="제목을 입력하세요."/>
                        <br/>

                        설명
                        <br/>
                        <textarea className="description" placeholder="설명을 입력하세요."/>
                        <br/>

                        파일
                        <br/>
                        <div className="uploader_container">
                            <UploaderView onUpload={this.onUpload} />
                        </div>
                        
                    </div>
                    <div className="btn_container">
                        <button className="submit_btn" onClick={this.onSubmit}>업로드</button>
                    </div>
                </div>
                    
            </DndProvider>


        );
    }
}



export default withRouter(PluginUploadScreen);
