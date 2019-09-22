import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import image from '../assets/cloud-upload-alt-solid.png';

const styles: React.CSSProperties = {
    backgroundColor: '#f3f3f3',
    width: '100%',
    height: '202px',
    textAlign: 'center',
    // position: 'absolute',
    // left: 10,
    // top: 10,
    zIndex: 100,
}

const styles2: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50px',
}

const styles3: React.CSSProperties = {
    width: '100%',
    height: '302px',
    fontFamily: 'NotoSansKR',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',

}

interface Props {
    style?: React.CSSProperties;
    onUpload: (acceptedFiles: File[]) => void;
}

const UploaderView = (props: Props) => {
    const onDrop = useCallback(props.onUpload, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{...styles, ...props.style}}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div style={styles3}>놓아주세요</div> :
                    <div style={styles2}>
                        <img src={image} alt="upload"/>
                        <div style={styles3}>이곳으로 파일을 끌어주세요</div>
                    </div>
            }
        </div>
    );
}

export default UploaderView;
