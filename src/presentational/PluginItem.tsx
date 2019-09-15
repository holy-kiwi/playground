import React, { Component } from 'react';
import "./PluginItem.css";
import { Card, Avatar, Skeleton, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
import Plugin from '../models/Plugin';

interface Props {
    plugin: Plugin;
    loading: boolean;

    onDownload?: () => void;
}

const PluginItem = (props: Props) => {
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
            <Card
                className="pluginItemCard"
                cover={
                    <div className="thumbnail-wrapper">
                        <div className="thumbnail">
                            <div className="centered">
                                <img alt={plugin.manifest.name} src={plugin.manifest.image} />
                            </div>
                        </div>
                    </div>
                }
                actions={[
                    <Link to={`/store/${plugin.plugin_id}`}>
                        <Button icon="info-circle" disabled={loading}>Detail</Button>
                    </Link>,
                    <Button icon="cloud-download" disabled={loading} onClick={onDownload}>Download</Button>
                ]}
            >

                <Skeleton active loading={loading} paragraph={{ rows: 5 }}>
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={plugin.manifest.name}
                        description={plugin.manifest.description}
                    />
                </Skeleton>

            </Card>
    );
}

export default PluginItem;
