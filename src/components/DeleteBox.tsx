import React, { useState, useCallback } from 'react'
import { useDrop } from 'react-dnd'
import { DragItem } from '../types';


const style: React.CSSProperties = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
}

export interface Props {
    onDrop: (item: any) => void
    lastDroppedColor?: string
}

const DeleteBox: React.FC<Props> = ({ onDrop, lastDroppedColor }) => {
    const [{ isOver, draggingColor, canDrop }, drop] = useDrop({
        accept: ['yellow', 'blue'],
        drop(item: DragItem) {
            onDrop(item.type)
            return undefined
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType() as string,
        }),
    })

    const opacity = isOver ? 1 : 0.7
    let backgroundColor = '#fff'
    switch (draggingColor) {
        case 'blue':
            backgroundColor = 'lightblue'
            break
        case 'yellow':
            backgroundColor = 'lightgoldenrodyellow'
            break
        default:
            break
    }

    return (
        <div ref={drop} style={{ ...style, backgroundColor, opacity }}>
            <p>Drop here.</p>

            {!canDrop && lastDroppedColor && <p>Last dropped: {lastDroppedColor}</p>}
        </div>
    )
}

export interface StatefulTargetBoxState {
    lastDroppedColor: string | null
}

const StatefulDeleteBox: React.FC = props => {
    const [lastDroppedColor, setLastDroppedColor] = useState<string | null>(null)
    const handleDrop = useCallback(
        (color: string) => setLastDroppedColor(color),
        [],
    )

    return (
        <DeleteBox
            {...props}
            lastDroppedColor={lastDroppedColor as string}
            onDrop={handleDrop}
        />
    )
}

export default StatefulDeleteBox
