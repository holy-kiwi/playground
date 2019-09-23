const naver_realtime = document.getElementById('naver_realtime');
const realtimeList = () => {
	request(
		'https://cors-anywhere.herokuapp.com/https://www.naver.com/',
		function(error, response, html) {
			if (error) console.error(error);
			if (!error && response.statusCode === 200) {
				var $ = cheerio.load(html);
				const result = $(
					'div.PM_CL_realtimeKeyword_rolling'
				);
				naver_realtime.innerHTML = result.text();
			}
		}
	)
}

realtimeList();