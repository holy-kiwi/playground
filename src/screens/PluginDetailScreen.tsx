import React, { Component } from 'react'; 
import { match } from 'react-router';
import { Location } from 'history';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './PluginDetailScreen.css';



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
        const plugin_name = "플러그인 이름";
        const plugin_subtitle = "플러그인 섭 타이틀(있으면)";
        const { match, location } = this.props;

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

            </div>
        );
    };
}

export default PluginDetailScreen;