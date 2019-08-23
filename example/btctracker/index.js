return function() {
    const dollar = document.getElementById('dollar');

    const getDollarPerBTC = () => {
        request(
            'https://cors-anywhere.herokuapp.com/https://coinmarketcap.com/currencies/bitcoin/',
            function(error, response, html) {
                console.log(response);
                console.log(html);
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
};
