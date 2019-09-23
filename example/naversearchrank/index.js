const realtimeList = () => {
	request(
		'https://cors-anywhere.herokuapp.com/https://www.naver.com/',
		function(error, response, html) {
			if (error) console.error(error);
			if (!error && response.statusCode === 200) {
				var $ = cheerio.load(html);
				let searchRankArr = [];
				for (let i = 1; i <= 10; i++) {
					searchRankArr.push($(`li.ah_item[data-order="${i}"] .ah_k`).text());
				}
				for (let i = 0; i < 10; i++) {
					let element = document.querySelector(`.naversearchchart-keyword[key="${i+1}"]`);
					if (element !== null) element.innerHTML = searchRankArr[i];
				}
			}
		}
	)
}

realtimeList();
