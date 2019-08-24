import React from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import Draggable from './Draggable'
import { DragItem, ItemTypes } from '../types';
import Plugin from '../models/Plugin';
import PluginView from './PluginView';

const styles: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // border: '1px solid black',
}

export interface ContainerProps {
    plugins: { [key: string]: Plugin };
    setPlugin: (id: string, left: number, top: number) => void;
}

const Container: React.FC<ContainerProps> = ({ plugins, setPlugin }) => {
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
        setPlugin(id, left, top);
    }

    return (
        <div ref={drop} style={styles}>
            {Object.keys(plugins).map(key => {
                console.log(key);
                const { left, top, id } = plugins[key];
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
            })}
        </div>
    )
}

export default Container
