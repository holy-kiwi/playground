import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function Uploader() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>놓아주세요</p> :
                    <p>여기로 파일을 끌어주세요</p>
            }
        </div>
    );
}

export default Uploader;
