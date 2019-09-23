var request = require('request');
var cheerio = require('cheerio');

res = request.get({url:"https://www.naver.com/"}, function(err, res, body) {
	var $ = cheerio.load(body);
	const result = $('div.PM_CL_realtimeKeyword_rolling');
	console.log(result.text());
});
