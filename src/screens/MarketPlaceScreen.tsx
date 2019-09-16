import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import PluginListContainer from '../container/PluginListContainer';
import './MarketPlaceScreen.css';

interface Props {
}

interface State {
  search_word: string;
}

class MarketPlaceScreen extends Component<Props, State> {
  
  constructor(props) {
    super(props);
    this.state = {
      search_word: "",
    }
  }

  searchListener =(e) => {
    this.setState({
      search_word: e.target.value,
    });
  }

  render() {
    const { Search } = Input;

    return (
      <div className="storeScreen">

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

          <div className="search_container">
            <Search 
              placeholder="Search Plugins that you need!" 
              onChange={this.searchListener}
            />
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
          <PluginListContainer search={this.state.search_word}/>
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

export default MarketPlaceScreen;
