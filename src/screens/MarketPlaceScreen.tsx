import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import PluginListContainer from '../container/PluginListContainer';
import './MarketPlaceScreen.css';
import '../assets/search-solid.png'

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

        <div className="header">
          <Link to={"/"}>{'PLAYGROUND'}</Link>
          <div className="search_container">
            <input className="search_bar" placeholder="Search Plugins!" onChange={this.searchListener} />
            <div className="search_btn"> </div>
          </div>
        </div> 


        <div className="under_header">
          <div className="description">플러그인 스토어</div>
          <div className="btn_container">
            <Link to="/upload" id="upload">
              <button className="upload_btn">업로드</button>
            </Link>
            <Link to="/guide">
              <button className="develop_guide_btn">개발가이드</button>
            </Link>
          </div>
        </div>


        {/* body */}
        <div className="body">
          <PluginListContainer search={this.state.search_word}/>
        </div>
        {/* end of body */}
      </div>
    )
  }
}

export default MarketPlaceScreen;
