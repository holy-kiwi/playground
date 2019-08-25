import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../types';


const style: React.CSSProperties = {
    position: 'absolute',
    border: '1px dashed gray',
    // backgroundColor: 'white',
    // padding: '0.5rem 1rem',
    cursor: 'move',
}

export interface DraggableProps {
    id: any;
    left: number;
    top: number;
}

const Draggable: React.FC<DraggableProps> = ({
    id,
    left,
    top,
    children,
}) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, left, top, type: ItemTypes.BOX },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    if (isDragging) {
        return <div ref={drag} />
    }
    return (
        <div ref={drag} style={{ ...style, left, top }}>
            {children}
        </div>
    )
}

export default Draggable
