import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Plugin from '../models/Plugin';

interface UploaderViewProps {
    onUpload: (plugin: Plugin) => void;
}

function UploaderView(props: UploaderViewProps) {
    const onDrop = useCallback((acceptedFiles: any[]) => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result;
            console.log(binaryStr);
            const plugin: Plugin = JSON.parse(binaryStr as string);
            props.onUpload(plugin);
        }

        acceptedFiles.forEach(file => reader.readAsBinaryString(file));
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()}>
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
