import React from "react";
import Plugin from "../models/Plugin";
import PluginItem from "./PluginItem";
import PluginItemCard from './PluginItemCard';

const styles: { [key: string]: React.CSSProperties } = {
    pluginListContainer: {
        width: '90%',
        minWidth: '700px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    }
}

interface Props {
    plugins: Plugin[];
    pluginsLoading: boolean;

    onDownload?: (pluginId: string) => void;
}

const PluginList = (props: Props) => {
    return (
        <div style={styles.pluginListContainer}>
            {
                !props.pluginsLoading && props.plugins !== undefined ?
                    props.plugins.map((value) =>
                        <PluginItemCard
                            key={value.plugin_id}
                            plugin={value}
                            loading={props.pluginsLoading}
                            onDownload={() => { props.onDownload(value.plugin_id) }} />
                    )
                    :
                    Array(6).fill(0).map((_, index) =>
                        <PluginItemCard
                            key={index}
                            plugin={undefined}
                            loading={props.pluginsLoading} />
                    )
            }
        </div>
    )
}

export default PluginList;
