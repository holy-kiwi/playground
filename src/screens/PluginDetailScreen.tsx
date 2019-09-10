import React, { Component } from 'react'; 
import { match } from 'react-router';
import { Location } from 'history';
import './PluginDetailScreen.css';
import './StoreScreen.css';
import { Button } from 'antd';
import { Link, Route } from 'react-router-dom';



interface Props {
    id: string;
    match: match<{id: string}>
    location: Location;
}

interface State {

}

class PluginDetailScreen extends Component<Props, State> {

    public state: State;
  
    constructor(props) {
        super(props);
        
    }

    render() {
        
        //여기서 id값으로 서버에 질문해서 플러그인 정보 받아옴
        const plugin_name = "플러그인 이름";
        const plugin_subtitle = "플러그인 섭 타이틀(있으면)";
        const { match, location } = this.props;

        return (
            <div className="storeScreen">

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


            <div className="pluginDescriptionContainer">
                <div className="pluginDescriptionTitle">
                    <h2><strong>{plugin_name}</strong> 디테일 페이지 입니다.</h2>
                    <h5>{plugin_subtitle}</h5>
                </div>
                
                <img src="https://i.stack.imgur.com/GNhxO.png" />
                <p className="pluginDescriptionP">
                    설명설명
                    <br/>
                    location.pathname : {location.pathname}
                    <br/>
                    match.path : {match.path}
                    <br/>
                    match.url : {match.url}
                    <br/>
                    id: {match.params.id}
                </p>

            </div>

            </div>

            
        );
    };
}

export default PluginDetailScreen;