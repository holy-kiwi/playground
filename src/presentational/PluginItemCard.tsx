import React from 'react';
import './PluginItemCard.css';
import { Link } from 'react-router-dom';
import Plugin from '../models/Plugin';

interface Props {
    plugin: Plugin;
    loading: boolean;

    onDownload?: () => void;
}

const PluginItemCard = (props: Props) => {
    const { plugin, loading, onDownload } =  props;
    
    return (
        loading?
            
            <div className="PluginItemCard">
                <div className="image_container">
                    <img src="https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png" />
                </div>

                <div className="info_container">
                    <div className="title">loading...</div>
                    <div className="description">loading...</div>
                    <button className="download_btn" disabled={loading} onClick={onDownload}>DOWNLOAD</button>    
                    <button className="detail_btn" disabled={loading}>SHOW DETAILS</button>
                    
                </div>
            </div>
            :
            <div className="PluginItemCard">
                <div className="image_container">
                    {plugin.manifest.image &&<img src={plugin.manifest.image} alt={plugin.manifest.name}/>}
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

    );
    
}

export default PluginItemCard;