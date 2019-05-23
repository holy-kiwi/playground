# Playground Plugin 개발 가이드

## 개요

Playground의 Plugin을 개발하기 위해서는 기본적으로 파일 세 개가 필요하다.

* `manifest.json`
* `index.html`
* `index.js`

## manifest.json

| Entry name       | Description                           | Type   | Default |
|------------------|---------------------------------------|--------|---------|
| manifest_version | 플러그인 규격 버전                    | number | 1       |
| name             | 플러그인 스토어에 나타날 이름         | string |         |
| version          | 버전 (semantic versioning을 따라야함) | string |         |
| description      | 플러그인 스토어에 나타날 설명         | string |         |
| width            | 플러그인의 width                      | number |         |
| height           | 플러그인의 height                     | number |         |

다음은 manifest.json 예시이다.

```json
{
    "manifest_version": 1,
    "name": "Clock",
    "version": "0.0.1",
    "description": "This is just CLOCK",
    "width": 300,
    "height": 100
}
```

## index.html

HTML, CSS 코드로 구성된다. 크게 실제 플러그인을 포함하는 `div` 태그와 스타일을 나타내는 `style` 태그로 이루어진다.

다음은 index.html 예시이다.

```html
<div id="container">
    <div id="clock">
        00:00:00
    </div>
</div>
<style>
    body {
        margin: 0;
    }

    #container {
        display: flex;
        height: 100px;
        justify-content: center;
        align-items: center;
        background-color: #ffffff00;
    }

    #clock {
        color: #fff;
        font-size: 32px;
        text-shadow: 0px 2px 8px #444;
        user-select: none;
    }
</style>
```

## index.js

플러그인이 동적으로 동작하기 위한 자바스크립트 코드 파일이다.

다음은 index.js 예시이다.

```js
const clock = document.getElementById('clock');
clock.innerHTML = getCurrentTime();

setInterval(() => {
    clock.innerHTML = getCurrentTime();
}, 1000);

function getCurrentTime() {
    const date = new Date();
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function pad(num) {
    if (num < 10) return '0' + num;
    return num;
}
```

## 테스트 방법

1. [plgr.netlify.com](https://plgr.netlify.com/)에 접속한다.
2. `manifest.json`, `index.html`, `index.js`를 한꺼번에 드래그하여 좌측상단에 놓는다.
3. 잘작동하는지 테스트한다.
