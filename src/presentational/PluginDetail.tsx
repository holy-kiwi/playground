import React from 'react';
// import "./PluginItem.css";
import { Card, Skeleton, Button } from 'antd';
import Plugin from '../models/Plugin';
import './PluginDetail2.css';

interface Props {
    plugin: Plugin;
    loading: boolean;

    onDownload?: () => void;
}

const PluginDetail = (props: Props) => {
    const { plugin, loading, onDownload } = props;
    return (
        loading ?
            <Card
                className="pluginItemCard"
                actions={[
                    <Button icon="info-circle" disabled={true}>Detail</Button>,
                    <Button icon="cloud-download" disabled={true} onClick={onDownload}>Download</Button>
                ]}>
                <Skeleton active loading={loading} paragraph={{ rows: 5 }}>
                </Skeleton>
            </Card>
            :

            <div className="plugindetail"> 
                <div className="plugin_info">
                    <div className="image_container">
                        {plugin.manifest.image &&<img src={plugin.manifest.image} alt={plugin.manifest.name}/>}
                    </div>

                    <div className="right">
                        <div className="info_container">
                            <div className="name">{plugin.manifest.name}</div>
                            <div className="uploader"></div>
                            <div className="version">버젼:{plugin.manifest.version}</div>
                            <div className="updated_date"></div>
                        </div>

                        <div className="btn_container">
                            <button className="download_btn" disabled={loading} onClick={onDownload}>DOWNLOAD</button>    
                        </div>
                    </div>
                </div>

                <div className="plugin_description">
                    <div className="line">
                        <div className="center"></div>
                    </div>
                    <div className="info">정보</div>
                    <div className="description">
                        <div className="center">
                            {plugin.manifest.description}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default PluginDetail;
