import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import './GuideScreen.css';

// const content = "# Playground Plugin 개발 가이드\n\n## 개요\nPlayground의 Plugin을 개발하기 위해서는 기본적으로 파일 세 개가 필요하다.\n* `manifest.json`\n* `index.html`\n* `index.js`\n\n\n## manifest.json\n\n| Entry name       | Description                           | Type   | Default |\n|------------------|---------------------------------------|--------|---------|\n| manifest_version | 플러그인 규격 버전                    | number | 1       |\n| name             | 플러그인 스토어에 나타날 이름         | string |         |\n| version          | 버전 (semantic versioning을 따라야함) | string |         |\n| description      | 플러그인 스토어에 나타날 설명         | string |         |\n| width            | 플러그인의 width                      | number |         |\n| height           | 플러그인의 height                     | number |         |\n\n다음은 manifest.json 예시이다.\n\n```json\n{\n    \"manifest_version\": 1,\n    \"name\": \"Clock\",\n    \"version\": \"0.0.1\",\n    \"description\": \"This is just CLOCK\",\n    \"width\": 300,\n    \"height\": 100\n}\n```\n\n\n\n## index.html\n\nHTML, CSS 코드로 구성된다. 크게 실제 플러그인을 포함하는 `div` 태그와 스타일을 나타내는 `style` 태그로 이루어진다.\n\n다음은 index.html 예시이다.\n\n```html\n<div id=\"container\">\n    <div id=\"clock\">\n        00:00:00\n    </div>\n</div>\n<style>\n    body {\n        margin: 0;\n    }\n\n   #container {\n        display: flex;\n        height: 100px;\n        justify-content: center;\n        align-items: center;\n        background-color: #ffffff00;\n   }\n\n    #clock {\n        color: #fff;\n        font-size: 32px;\n        text-shadow: 0px 2px 8px #444;\n        user-select: none;\n    }\n</style>\n```\n\n## index.js\n\n플러그인이 동적으로 동작하기 위한 자바스크립트 코드 파일이다.\n\n다음은 index.js 예시이다.\n\n```js\nconst clock = document.getElementById('clock');\nclock.innerHTML = getCurrentTime();\n\nsetInterval(() => {\n    clock.innerHTML = getCurrentTime();\n}, 1000);\n\nfunction getCurrentTime() {\n    const date = new Date();\n    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;\n}\n\nfunction pad(num) {\n    if (num < 10) return '0' + num;\n    return num;\n}\n```\n\n## 테스트 방법\n\n1. [plgr.netlify.com](https://plgr.netlify.com/)에 접속한다.\n2. `manifest.json`, `index.html`, `index.js`를 한꺼번에 드래그하여 좌측상단에 놓는다.\n3. 잘작동하는지 테스트한다.\n";

interface State {
    markdown: string;
}
class GuildeScreen extends Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {
            markdown: undefined,
        }
    }

    componentDidMount() {
        const mdPath = require("../docs/PLUGIN.md");

        fetch(mdPath)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    markdown: text
                });
            })
    }

    render() {
        const { markdown } = this.state;
        if (markdown === undefined) return null;
        return (

            <div className="guideScreen">
                <div className="header">
                    <Link to={"/"}>{'PLAYGROUND'}</Link>
                    <div className="search_container">
                        <input className="search_bar" placeholder="Search Plugins!" />
                        <div className="search_btn"> </div>
                    </div>
                </div>

                <div className="under_header">
                    <div className="description">PLAYGROUND 플러그인 개발가이드</div>
                    <div className="btn_container">
                        <Link to="/upload" id="upload">
                            <button className="upload_btn">업로드</button>
                        </Link>
                        <Link to="/guide">
                            <button className="develop_guide_btn">개발가이드</button>
                        </Link>
                    </div>
                </div>

                <div className="guide">
                    <ReactMarkdown
                        source={markdown}
                        renderers={{ code: CodeBlock }} />
                    {/* <ReactMarkdown url="https://github.com/holy-kiwi/playground/blob/master/docs/PLUGIN.md"/> */}
                </div>

            </div>
        )
    }
}

export default GuildeScreen;