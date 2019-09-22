import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PluginDetailContainer from '../container/PluginDetailContainer';

import './PluginDetailScreen.css';

interface Props {
    id: string;
}

class PluginDetailScreen extends Component<Props> {

    render() {
        return (
            <div className="detailScreen">

                <div className="header">
                    <Link to={"/"}>{'PLAYGROUND'}</Link>
                    <div className="search_container" >
                        <input className="search_bar" placeholder="Search Plugins!" />
                        <div className="search_btn"> </div>
                    </div>
                </div>

                <PluginDetailContainer />

            </div>
        );
    };
}

export default PluginDetailScreen;