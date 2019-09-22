import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
    WhiteButtonContainer: {
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
        backgroundColor: '#ffffff',
        fontWeight: 'bold',
        letterSpacing: 'normal',
    }
}

interface Props {
    label: string;
    onClick?: () => void;
}

const WhiteButton = (props: Props) => {
    return (
        <div style={styles.WhiteButtonContainer} onClick={props.onClick}>
            {props.label}
        </div>
    )

}

export default WhiteButton;
