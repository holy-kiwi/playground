import React, { Component } from 'react';
import PluginAgent from '../market/PluginAgent';
import PluginItem from './PluginItem';
import { Button } from 'antd';
import Plugin from '../models/Plugin';
import { Link, Route } from 'react-router-dom';
import PluginDetailScreen from './PluginDetailScreen';
import './StoreScreen.css';
import { InjectedComponent } from '../common';
import { HomeScreenStore } from '../stores';


interface Props {
  location: any;
  match: any;
  HomeScreenStore: HomeScreenStore;
}

interface State {
  plugins: Plugin[];
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

  async componentDidMount() {
    const plugins: Plugin[] = await PluginAgent.fetchPlugins();

    this.setState({
      plugins,
      pluginsLoading: false,
    })
  }

  onDownload = async (pluginId: string) => {
    const plugin: Plugin = await PluginAgent.fetchPlugin(pluginId);
    console.log(plugin);
    this.props.HomeScreenStore.addPlugin({...plugin, left: 100, top: 100});
  }

  render() {
    const { location, match } = this.props;

    const match2 = { match }.match; //문제없음
    const location2 = { location }.location; //문제없음

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


        {/* body */}
        <div className="body">

          {!this.state.pluginsLoading ?
            this.state.plugins.map((value) =>
              <PluginItem
                name={value.manifest.name}
                image={value.manifest.image}
                detail={value.manifest.description}
                download={value.manifest.download}
                loading={this.state.pluginsLoading}
                id={value.plugin_id}
                location={location2}
                match={match2}
                onDownload={() => { this.onDownload(value.plugin_id) }} />
            )
            :
            Array(6).fill(0).map((value) =>
              <PluginItem
                name={undefined}
                image={undefined}
                detail={undefined}
                download={undefined}
                loading={this.state.pluginsLoading}
                id={undefined}
                location={undefined}
                match={undefined} />
            )
          }

        </div>
        {/* end of body */}



        {/* footer */}
        <div className="footer">
          <div className="btn_container3">
            <Link to="/upload">
              <button className="upload_btn">업로드</button>
            </Link>
            <button className="develop_guide_btn">개발가이드</button>
          </div>
        </div>
        {/* end of footer */}


      </div>
    )
  }
}

export default InjectedComponent(StoreScreen, HomeScreenStore);
