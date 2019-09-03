import React, { Component } from 'react';
import PluginAgent from '../market/PluginAgent';
import './StoreScreen.css';
import PluginItem from './PluginItem';

interface Props {

}

interface State {
  plugins: any[];
}

class StoreScreen extends Component<Props, State> {

    public state: State;
  
    constructor(props) {
        super(props);

        this.state = {
            plugins: [],
        }
    }

    componentDidMount() {
        PluginAgent.fetchPlugins((plugins) => {
            this.setState({
              plugins,
            })
        });
    }

    render() {
      
        
        return (


            <div  style={{ 
                display:"flex", 
                justifyContent:"center", 
                alignContent:"flex-top", 
                flexWrap:"wrap"}}>
        
                {/* header */}
                <div className="header">
                  
        
        
        
        
                  <div className="title_container">
                    <h1>This is header</h1>
                  </div>
        
        
        
        
        
        
        
        
        
        
        
                  <div className="btn_container">
                    <button className="header_btn info_btn">정보</button>
                    <button  className="header_btn utility_btn">유틸리티</button>
                    <button className="header_btn famous_btn">추천순</button>
                  </div>
        
                </div>
        
                <div>
                    <button className="home_btn">홈</button>
                  </div>
        
        
                {/* body */}
                <div style={{
                  minWidth: "700px", 
                  display:"flex", 
                  justifyContent:"center", 
                  alignContent:"center", 
                  flexWrap:"wrap",
        
                  width:"90%",
                  height:"90%"
                }}>
                  {this.state.plugins.map((value) => (
                    <PluginItem 
                    name={value.name} 
                    image={value.image}
                    detail={value.detail}
                    download={value.download} />
                  ))
                }
                </div>
        
        
                {/* footer */}
                <div>
                <h1>This is footer</h1>
        
                </div>
        
        
              </div>
        )
    }
}

export default StoreScreen;
