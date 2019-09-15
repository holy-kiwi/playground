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

                {/* header */}
                <div className="header">

                    <div className="title_container">
                        <h1>플러그인 스토어</h1>
                    </div>

                    {/* <div className="btn_container1">
                        <Button type="primary" size="large" shape="round">정보</Button>
                        <Button type="primary" size="large">유틸리티</Button>
                        <Button type="primary" size="large">추천순</Button>
                    </div> */}

                </div>
                {/* end of header */}


                <div className="btn_container2">
                    <Link to={"/"}>
                        <button className="home_btn">홈</button>
                    </Link>
                </div>


                {/* body */}
                <PluginDetailContainer />

            </div>
        );
    };
}

export default PluginDetailScreen;