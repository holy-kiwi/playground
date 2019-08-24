import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadPlugin } from '../models/Uploader';

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

interface UploaderViewProps {
    onUpload: (plugin: any) => void;
}

function UploaderView(props: UploaderViewProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        uploadPlugin(acceptedFiles, props.onUpload);
    }, []);
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
