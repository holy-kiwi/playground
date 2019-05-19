interface Plugin {
    manifestVersion: number;
    name: string;
    version: string;
    description: string;
    source: string;
    width: number;
    height: number;
}

export default Plugin;