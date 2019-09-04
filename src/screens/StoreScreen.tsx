import React, { Component } from 'react';
import PluginAgent from '../market/PluginAgent';
import './StoreScreen.css';
import PluginItem from './PluginItem';
import { Button } from 'antd';

interface Props {

}

interface State {
  plugins: any[];
  pluginsLoading: boolean;
}

class StoreScreen extends Component<Props, State> {

    public state: State;
  
    constructor(props) {
        super(props);
        this.state = {
            plugins: [],
            pluginsLoading: true,
        }
    }

    componentDidMount() {
        PluginAgent.fetchPlugins((plugins) => {
            this.setState({
              plugins,
              pluginsLoading: false,
            })
        });
    }

    render() {
      
        
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
                    <button className="home_btn">홈</button>
                </div>
        
        
                {/* body */}
                <div className="body">

                  {!this.state.pluginsLoading ?
                    this.state.plugins.map((value) => 
                      <PluginItem 
                        name={value.name} 
                        image={value.image}
                        detail={value.detail}
                        download={value.download}
                        loading={this.state.pluginsLoading} />
                    )
                    :
                    Array(6).fill(0).map((value) => 
                      <PluginItem 
                          name={undefined} 
                          image={undefined}
                          detail={undefined}
                          download={undefined}
                          loading={this.state.pluginsLoading} />
                      )
                    }
                </div>
                {/* end of body */}

        
        
                {/* footer */}
                <div className="footer">
                  <div className="btn_container3">
                    <button className="upload_btn">업로드</button>
                    <button className="develop_guide_btn">개발가이드</button>
                  </div>
                </div>
                {/* end of footer */}

        
              </div>
        )
    }
}

export default StoreScreen;
