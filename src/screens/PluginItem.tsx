import React, {Component} from 'react';
import "./PluginItem.css";
import { Card, Icon, Avatar, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';


interface Props {
    name: string;
    image: string;
    detail: string;
    download: string;
    loading: boolean;
}

interface State {
  
}

 
class PluginItem extends Component<Props, State> {
    render(){
        const {name, image, detail, download, loading} = this.props;
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
                    <Icon type="info-circle" key="detail" />,
                    <Icon type= "cloud-download" key="download"/>
                ]}
            >
               
                <Skeleton loading={loading} paragraph={{ rows: 5 }}>
                    <Meta
                        avatar = {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title = {name}
                        description = {name}
                    />
                </Skeleton>

            </Card>

        )
    }
}


export default PluginItem;