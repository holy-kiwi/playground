import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const styles: React.CSSProperties = {
    backgroundColor: '#ffffff50',
    width: 200,
    height: 100,
    textAlign: 'center',
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 100,
}

interface Props {
    onUpload: (acceptedFiles: File[]) => void;
}

const UploaderView = (props: Props) => {
    const onDrop = useCallback(props.onUpload, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={styles}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div>놓아주세요</div> :
                    <div>여기로 파일을 끌어주세요</div>
            }
        </div>
    );
}

export default UploaderView;
