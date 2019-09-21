import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PluginDetailContainer from '../container/PluginDetailContainer';

import './PluginDetailScreen.css';

interface Props {
    id: string;
}

class PluginDetailScreen extends Component<Props> {

    render() {
        return (
            <div className="detailScreen">

                {/* <div className="header">
                    <div className="title_container">
                        <h1>플러그인 스토어</h1>
                    </div>
                </div>

                <div className="btn_container2">
                    <Link to={"/"}>
                        <button className="home_btn">홈</button>
                    </Link>
                </div>

                <PluginDetailContainer /> */}











                <div className="header2">
                    <Link to={"/"}>{'PLAYGROUND'}</Link>
                    <div className="search_container" >
                        <input className="search_bar" placeholder="Search Plugins!" />
                        <div className="search_btn"> </div>
                    </div>
                </div>


                <PluginDetailContainer />

            </div>
        );
    };
}

export default PluginDetailScreen;