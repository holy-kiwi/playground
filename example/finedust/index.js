const contents = document.getElementById('finedust-contents');
const desc = document.getElementById('finedust-desc');

const getFineDust = () => {
    request(
        'https://cors-anywhere.herokuapp.com/http://aqicn.org/city/seoul/kr/?source=post_page-----468fcf3b544f----------------------',
        function(error, response, html) {
            if (error) console.error(error);
            if (!error && response.statusCode === 200) {
                var $ = cheerio.load(html);
                const value = $(
                    'div#aqiwgtvalue'
                ).text();
                const status = $(
                    'div#aqiwgtinfo'
                ).text();
                const updatedTime = $(
                    'span#aqiwgtutime'
                ).text();
                contents.innerHTML = `${status} (${value})`;
                desc.innerHTML = updatedTime;
            }
        }
    );
};

getFineDust();
