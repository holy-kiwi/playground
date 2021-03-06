import React from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import { inject, observer } from 'mobx-react';
import Draggable from './Draggable'
import { DragItem, ItemTypes } from '../types';
import PluginView from './PluginView';
import { HomeScreenStore } from '../stores';

const styles: { [key: string]: React.CSSProperties } = {
    dragAndDropZone: {
        width: '100%',
        flex: 1,
        // border: '1px solid black',
    }

}

export interface ContainerProps {
    HomeScreenStore?: HomeScreenStore;
}

const DragAndDropZone: React.FC<ContainerProps> = ({ HomeScreenStore }) => {
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
    }

    const onDelete = (id: string) => {
        HomeScreenStore.deletePlugin(id);
    }

    const { plugins, isEditMode } = HomeScreenStore;
    return (
        <div ref={drop} style={styles.dragAndDropZone}>
            {Object.keys(plugins).map(key => {
                const { left, top, plugin_id } = plugins[key];
                if (isEditMode)
                    return (
                        <Draggable
                            key={plugin_id}
                            id={plugin_id}
                            left={left}
                            top={top}
                            onDelete={onDelete}
                        >
                            <PluginView plugin={plugins[key]} />
                        </Draggable>
                    )
                else
                    return <PluginView style={{ position: 'absolute', left: plugins[key].left, top: plugins[key].top }} key={plugin_id} plugin={plugins[key]} />
            })}
        </div>
    )
}

export default inject('HomeScreenStore')(observer(DragAndDropZone));
