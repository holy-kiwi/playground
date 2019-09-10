import React, { Component } from 'react'; 
import { match } from 'react-router';
import { Location } from 'history';
import PluginAgent from '../market/PluginAgent';
import Plugin from '../models/Plugin';


interface Props {
    id: string;
    match: match<{id: string}>
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
        
        this.setState({plugin});
    }

    render() {
        
        //여기서 id값으로 서버에 질문해서 플러그인 정보 받아옴
        const plugin_name = "플러그인 이름";
        const plugin_subtitle = "플러그인 섭 타이틀(있으면)";
        const { match, location } = this.props;
        const { plugin } = this.state;

        if (plugin === undefined) return null;
        
        return (
            <div>
                {/* <Header>
                    <PageHeader onBack={()=>null} title={plugin_name} subTitle={plugin_subtitle} />
                </Header>
                <Content>
                    <img src="https://i.stack.imgur.com/GNhxO.png" />
                    <p>this part is for descriptions.</p>
                </Content>
                <Footer></Footer> */}
                
                <h2><strong>{plugin.manifest.name}</strong> 디테일 페이지 입니다.</h2>
                <h5>{plugin.manifest.name}</h5>
                <img src={plugin.manifest.image} />
                <p>
                    {plugin.manifest.description}
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
        );
    };
}

export default PluginDetailScreen;