import React, { Component } from 'react';
import { match } from 'react-router';
import { Location } from 'history';
import PluginAgent from '../market/PluginAgent';
import Plugin from '../models/Plugin';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './PluginDetailScreen.css';



interface Props {
    id: string;
    match: match<{ id: string }>
    location: Location;
}

interface State {
    plugin: Plugin;

}

class PluginDetailScreen extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            plugin: undefined,
        }
    }

    async componentDidMount() {
        const { match, location } = this.props;
        const plugin: Plugin = await PluginAgent.fetchPlugin(match.params.id);

        this.setState({ plugin });
    }

    render() {

        //여기서 id값으로 서버에 질문해서 플러그인 정보 받아옴
        const plugin_name = "플러그인 이름";
        const plugin_subtitle = "플러그인 섭 타이틀(있으면)";
        const { match, location } = this.props;
        const { plugin } = this.state;

        if (plugin === undefined) return null;

        return (
            <div className="detailScreen">

                {/* header */}
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


                {/* body */}
                <div className="body detail">
                    <div className="pluginTitleContainer">
                        <h2><strong>{plugin_name}</strong> 디테일 페이지 입니다.</h2>
                        <h5>{plugin_subtitle}</h5>
                    </div>

                    <div className="pluginImageContainer">
                        <img src="https://i.stack.imgur.com/GNhxO.png" />
                    </div>

                    <div className="pluginDescriptionContainer">
                        <p>
                            설명설명
                            <br />
                            location.pathname : {location.pathname}
                            <br />
                            match.path : {match.path}
                            <br />
                            match.url : {match.url}
                            <br />
                            id: {match.params.id}
                        </p>
                    </div>

                    <div className="btn_container4">
                        <Button className="download_btn">다운로드</Button>  
                    </div>

                </div>

            </div>
        );
    };
}

export default PluginDetailScreen;