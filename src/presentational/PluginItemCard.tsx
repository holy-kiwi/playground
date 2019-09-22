import React from 'react';
import './PluginItemCard.css';
import './SKPluginItemCard.css';
import { Link } from 'react-router-dom';
import Plugin from '../models/Plugin';

interface Props {
    plugin: Plugin;
    loading: boolean;

    onDownload?: () => void;
}

const PluginItemCard = (props: Props) => {
    const { plugin, loading, onDownload } = props;

    return (
        !loading && plugin !== undefined && plugin.manifest !== undefined ?
            <div className="PluginItemCard">
                <div className="image_container">
                    {plugin.manifest.image && <img src={plugin.manifest.image} alt={plugin.manifest.name} />}
                </div>

                <div className="info_container">
                    <div className="title">{plugin.manifest.name}</div>
                    <div className="description">{plugin.manifest.description}</div>
                    <button className="download_btn" disabled={loading} onClick={onDownload}>DOWNLOAD</button>
                    <Link to={`/store/${plugin.plugin_id}`}>
                        <button className="detail_btn" disabled={loading}>SHOW DETAILS</button>
                    </Link>
                </div>
            </div>
            :
            <div className="SKPluginItemCard">
                <div className="skeleton1">
                    <div className="bar">
                        <div className="indicator" />
                    </div>
                    <div className="wrapper">
                        <div className="list" />
                    </div>
                </div>

                <div className="skeleton2">
                    <div className="bar">
                        <div className="indicator" />
                    </div>
                    <div className="wrapper">
                        <div className="list" />
                    </div>
                </div>

            </div>
            

    );

}

export default PluginItemCard;