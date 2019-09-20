import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../types';


const styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: 'absolute',
        border: '1px dashed gray',
        // backgroundColor: 'white',
        // padding: '0.5rem 1rem',
        cursor: 'move',
        zIndex: 1,
    },
    deleteButton: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        right: -15,
        top: -15,
        cursor: 'pointer',
        borderRadius: 15,
        backgroundColor: 'gray',
        zIndex: 100,
    }
}

export interface DraggableProps {
    id: string;
    left: number;
    top: number;
    onDelete: (id: string) => void;
}

const Draggable: React.FC<DraggableProps> = ({
    id,
    left,
    top,
    onDelete,
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
        <div ref={drag} style={{ ...styles.container, left, top }}>
            <div style={styles.deleteButton} onClick={() => onDelete(id)}>X</div>
            {children}
        </div>
    )
}

export default Draggable;
