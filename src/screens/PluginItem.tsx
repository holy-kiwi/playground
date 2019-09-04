import React, {Component} from 'react';
import "./PluginItem.css";
import { Card, Icon, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';


interface Props {
    name: string;
    image: string;
    detail: string;
    download: string;
}

interface State {
    
  }

 
class PluginItem extends Component<{name: string; image: string; detail: string; download: string}, State> {
    render(){
        const {name, image, detail, download} = this.props;
        return (
            // <div className="plugin_box">
            //     <h1 className="plugin_title" id="name">{name}</h1>
            //     <img className="plugin_image" src={image} alt={name}/>
            //     <div className="plugin_link">     
            //         <div className="plugin_link_detail">
            //             <a href={detail}>Detail</a>
            //         </div>
            //         <div className="plugin_link_download">
            //             <a href={download}>Download</a>
            //         </div>        
            //     </div>
            // </div>

            <Card
                style={{ width: "30%"}}
                cover={
                    
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
                <Meta
                    avatar = {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title = {name}
                    description = {name}
                />

            </Card>

        )
    }
}


export default PluginItem;