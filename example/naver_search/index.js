const search_naver_button = document.getElementById('search_naver_button');
function search_naver() {
	var keyword = document.getElementById('search_naver_keyword').value;
	window.open(`https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${keyword}`, '_blank');
}
search_naver_button.addEventListener('click', search_naver);
