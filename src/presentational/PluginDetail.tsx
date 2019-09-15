import React from 'react';
import "./PluginItem.css";
import { Card, Skeleton, Button } from 'antd';
import Plugin from '../models/Plugin';

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
            <div className="body detail">
                <div className="pluginTitleContainer">
                    {/* 제목부분 간격 조정 필요 */}
                    <h2><strong>{plugin.manifest.name}</strong></h2>
                </div>

                <div className="pluginImageContainer">
                    <img src={plugin.manifest.image} />
                </div>

                <div className="pluginDescriptionContainer">
                    <p>
                        {plugin.manifest.description}
                    </p>
                </div>

                <div className="btn_container4">
                    <Button className="download_btn" onClick={onDownload}>다운로드</Button>
                </div>

            </div>
    );
}

export default PluginDetail;
