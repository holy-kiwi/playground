var ex;
var price;
const crypto_name = document.getElementById('search_crypto_area')
const crypto_quotes = document.getElementById('search_crypto_quotes');
const crypto_button = document.getElementById('search_crypto_button');

const search_exchange = () => {
	request(
		'https://cors-anywhere.herokuapp.com/https://earthquake.kr:23490/query/USDKRW',
		function(error, response, html) {
			if (error) console.error(error);
			if (!error && response.statusCode === 200) {
				//var $ = cheerio.load(html);
				ex = JSON.parse(cheerio.load(html).text())['USDKRW'][0];
				//const result = $(
				//	'div.PM_CL_realtimeKeyword_rolling'
				//);
			}
		}
	)
};

const search_crypto_quotes = () => {
	request(
		'https://cors-anywhere.herokuapp.com/https://coinmarketcap.com/',
		function(error, response, html) {
			if (error) console.error(error);
			if (!error && response.statusCode === 200) {
				var name = crypto_name.value
				price = cheerio.load(html)('tr#'.concat(name).concat(' .price')).text();
				crypto_quotes.innerHTML = Math.round(Number(ex)*Number(price.substr(1)));
			}
		}
	)
};

search_exchange();
crypto_button.addEventListener('click', search_crypto_quotes);