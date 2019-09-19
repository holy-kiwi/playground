import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
    BlackButtonContainer: {
        width: 100,
        height: 28,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        borderRadius: 18,
        color: '#000000',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        letterSpacing: 'normal',
    }
}

interface Props {
    label: string;
    onClick?: () => void;
}

const BlackButton = (props: Props) => {
    return (
        <div style={styles.BlackButtonContainer} onClick={props.onClick}>
            {props.label}
        </div>
    )

}

export default BlackButton;
