import React, { Component } from 'react'; 


interface Props {
    id: string;
    match: object;
    location: object;
}

interface State {

}

class PluginDetailScreen extends Component<Props, State> {

    public state: State;
  
    constructor(props) {
        super(props);
        
    }

    render() {
        
        // const {Header, Content, Footer } = Layout;
        const  match = this.props.match;
        const match2 = {match}.match;

        const location = this.props.location;
        const location2 = {location}.location;
        console.log(match2);
        console.log(location2);
        
        
        
        //여기서 id값으로 서버에 질문해서 플러그인 정보 받아옴
        const plugin_name = "플러그인 이름";
        const plugin_subtitle = "플러그인 섭 타이틀(있으면)";

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
                
                <h2><strong>{plugin_name}</strong> 디테일 페이지 입니다.</h2>
                <h5>{plugin_subtitle}</h5>
                <img src="https://i.stack.imgur.com/GNhxO.png" />
                <p>
                    설명설명
                    <br/>
                    location.pathname : {location2["pathname"]}
                    <br/>
                    match.path : {match2["path"]}
                    <br/>
                    match.url : {match2["url"]}
                </p>

            </div>
        );
    };
}

export default PluginDetailScreen;