import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
// import docs from  '../../docs/PLUGIN.md';
// import '../../docs/PLUGIN.md';

const content = require('../../docs/PLUGIN.md');

class GuildeScreen extends Component {
    render() {
        console.log(content);
        return (
            <ReactMarkdown source={'../../docs/PLUGIN.md'} />
        )
    }
}

export default GuildeScreen;