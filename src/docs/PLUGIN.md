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
| image            | 플러그인의 image url (322 X 168 크기 권장) | string |         |

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

1. [https://home.plgr.app?testmode=true](https://home.plgr.app?testmode=true)에 접속한다.
2. `manifest.json`, `index.html`, `index.js`를 한꺼번에 드래그하여 좌측상단에 놓는다.
3. 잘작동하는지 테스트한다.

## 웹 스크래핑 구현하는 방법

Playground에서 기본적으로 지원하는 외부 라이브러리는 [request](https://github.com/request/request), [cheerio](https://github.com/cheeriojs/cheerio)이다. 이 두 라이브러리를 사용하여 웹 스크래핑을 구현할 수 있다.

브라우저단의 CORS 이슈로 외부 도메인에 접근하는데에 제한이 있으므로 [https://cors-anywhere.herokuapp.com](https://cors-anywhere.herokuapp.com)와 같은 CORS를 활성화해주는 프록시 서버를 사용하여 해결할 수 있다.

다음은 비트코인 시세를 가져오는 웹 스크래핑 구현 예제이다. 

```js
const dollar = document.getElementById('dollar');

const getDollarPerBTC = () => {
    request(
        'https://cors-anywhere.herokuapp.com/https://coinmarketcap.com/currencies/bitcoin/',
        function(error, response, html) {
            // console.log(response);
            // console.log(html);
            if (error) console.error(error);
            if (!error && response.statusCode === 200) {
                var $ = cheerio.load(html);
                const result = $(
                    'span.details-panel-item--price__value'
                ).text();
                dollar.innerHTML = '1BTC = $' + result;
            }
        }
    );
};

getDollarPerBTC();
```

## 데이터를 저장하는 방법

HTML5의 `localStorage`를 사용하여 데이터를 저장하고 불러올 수 있다.

다음은 데이터를 저장하는 기능을 가지고 있는 메모장 플러그인의 구현 예제이다.

```js
const memo = document.getElementById('memo');
const KEY_MEMO = 'key:memo';

memo.value = localStorage.getItem(KEY_MEMO);

memo.onkeyup = () => {
    localStorage.setItem(KEY_MEMO, memo.value);
};
```
