var ex;
var price;
const crypto_quotes = document.getElementById('search_crypto_quotes');

var crypto_list = [
	'bitcoin',
	'ethereum',
	'ripple',
	'bitcoin-cash',
	'litecoin'
];

function make_id_name(name) {
	return "id-" + name;
}

function number_with_commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const search_exchange = (cb) => {
	request(
		'https://cors-anywhere.herokuapp.com/https://earthquake.kr:23490/query/USDKRW',
		function(error, response, html) {
			if (error) console.error(error);
			if (!error && response.statusCode === 200) {
				ex = JSON.parse(cheerio.load(html).text())['USDKRW'][0];
				cb && cb();
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
				var quotes_str = '<h3><b>- 주요 암호화폐 시세 -</b></h3>';
				for (var name of crypto_list) {
					name = make_id_name(name);
					price = cheerio.load(html)('tr#'.concat(name).concat(' .price')).text();
					quotes_str += '<li>' + name.substring(3) + ': '
								  + number_with_commas(Math.round(Number(ex)*Number(price.substr(1))))
								  + '원</li>';
				}
				crypto_quotes.innerHTML = quotes_str;
			}
		}
	)
};

search_exchange(search_crypto_quotes);
