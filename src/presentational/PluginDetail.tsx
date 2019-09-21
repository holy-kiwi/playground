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
            // <div className="body detail">
            //     <div className="pluginTitleContainer">
            //         {/* 제목부분 간격 조정 필요 */}
            //         <h2><strong>{plugin.manifest.name}</strong></h2>
            //     </div>

            //     <div className="pluginImageContainer">
            //         <img src={plugin.manifest.image} />
            //     </div>

            //     <div className="pluginDescriptionContainer">
            //         <p>
            //             {plugin.manifest.description}
            //         </p>
            //     </div>

            //     <div className="btn_container4">
            //         <Button className="download_btn" onClick={onDownload}>다운로드</Button>
            //     </div>

            // </div>

            <div className="plugindetail"> 
                <div className="plugin_info">
                    <div className="image_container">
                        {plugin.manifest.image &&<img src={plugin.manifest.image} alt={plugin.manifest.name}/>}
                    </div>

                    <div className="info_container">
                        <div className="name"></div>
                        <div className="uploader"></div>
                        <div className="version"></div>
                        <div className="updated_date"></div>
                    </div>

                    <div className="btn_container">
                        <button className="download_btn" disabled={loading} onClick={onDownload}>DOWNLOAD</button>    
                    </div>
                </div>

                <div className="plugin_description">
                </div>
            </div>
    );
}

export default PluginDetail;
