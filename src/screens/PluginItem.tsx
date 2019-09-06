import React, {Component} from 'react';
import "./PluginItem.css";
import { Card, Icon, Avatar, Skeleton, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link, Route } from 'react-router-dom';
import { render } from 'react-dom';
import PluginDetailScreen from './PluginDetailScreen'
import { any } from 'prop-types';


interface Props {
    name: string;
    image: string;
    detail: string;
    download: string;
    loading: boolean;
    id: string;
    match: object;
    location: object;
}

interface State {
  
}

 
class PluginItem extends Component<Props, State> {
    
    render(){
        const {name, image, detail, download, loading, id, match, location} = this.props;
        
        console.log(match);
        console.log(location);


        const match2 = {match}.match;
        const location2 = {location}.location;

        // console.log(match2);
        // console.log(location2);


        // console.log(location["pathname"]);
        // console.log(match["path"]);
        // console.log(match["url"]);

        return (
           
                <Card
                    className="pluginItemCard"
                    cover={
                        loading ||
                            <div className="thumbnail-wrapper">
                                <div className="thumbnail">
                                    <div className="centered">
                                        <img alt = {name} src = {image} />
                                    </div>
                                </div>
                            </div>
                    }
                    actions= {[
                        // <Link to={`${match["url"]}/${this.props.id}`}>
                        <Link to={`/store/${this.props.id}`}>
                            <Button icon="info-circle" target={this.props.id} >
                                Search
                            </Button>
                        </Link>,
                        <Button icon="cloud-download">Download</Button>
                    ]}
                >
                
                    <Skeleton active loading={loading} paragraph={{ rows: 5 }}>
                        <Meta
                            avatar = {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title = {name}
                            description = {name}
                        />
                    </Skeleton>

                </Card>
        );
    }
}


export default PluginItem;