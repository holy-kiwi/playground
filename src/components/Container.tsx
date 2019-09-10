import React from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import Draggable from './Draggable'
import { DragItem, ItemTypes } from '../types';
import PluginView from './PluginView';
import { HomeScreenStore } from '../stores';
import { InjectedComponent } from '../common';
import LocalStorageUtil from '../storage/LocalStorageUtil';

const styles: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // border: '1px solid black',
}

export interface ContainerProps {
    HomeScreenStore: HomeScreenStore;
}

const Container: React.FC<ContainerProps> = ({ HomeScreenStore }) => {
    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
            const left = Math.round(item.left + delta.x)
            const top = Math.round(item.top + delta.y)
            moveBox(item.id, left, top)
            return undefined
        },
    })

    const moveBox = (id: string, left: number, top: number) => {
        HomeScreenStore.changePlugin(id, left, top);
        // 플러그인 저장
        LocalStorageUtil.setPlugins(HomeScreenStore.plugins);
    }

    const { plugins, isEditMode } = HomeScreenStore;
    return (
        <div ref={drop} style={styles}>
            {Object.keys(plugins).map(key => {
                const { left, top, plugin_id: id } = plugins[key];
                if (isEditMode)
                    return (
                        <Draggable
                            key={id}
                            id={id}
                            left={left}
                            top={top}
                        >
                            <PluginView plugin={plugins[key]} />
                        </Draggable>
                    )
                else
                    return <PluginView style={{ position: 'absolute', left: plugins[key].left, top: plugins[key].top }} key={id} plugin={plugins[key]} />
            })}
        </div>
    )
}

export default InjectedComponent(Container, HomeScreenStore);
