import Plugin, { Manifest } from "./Plugin";

const MANIFEST = 'manifest.json';
const HTML = 'index.html';
const JS = 'index.js';

export const uploadPlugin = (acceptedFiles: File[], callback: (plugin: Plugin) => void) => {
    let pluginToUpload: Plugin = new Plugin();
    let count: number = 0;

    acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = (e: any) => {
            const text = e.target.result;

            switch(file.name) {
                case MANIFEST:
                    const manifest: Manifest = JSON.parse(text);
                    pluginToUpload.manifest = manifest;
                    count ++;
                    break;
                case HTML:
                    pluginToUpload.htmlSource = text;
                    count ++;
                    break;
                case JS:
                    pluginToUpload.jsSource = text;
                    count ++;
                    break;
                default:
                    console.error("[PLGR] 잘못된 파일이 업로드되었습니다.");
                    break;
            }
        }
        reader.onloadend = () => {
            // 세 파일이 모두 업로드되었다면
            if (count === 3) {
                callback && callback(pluginToUpload);
            }
        }
        reader.readAsText(file)
    });
}
