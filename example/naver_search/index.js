const KEY_NAVER = 'key:naversearch';
const search_naver_button = document.getElementById('naversearch-button');
const input = document.getElementById('naversearch-input');
function search_naver() {
	var keyword = input.value;
	window.open(`https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${keyword}`, '_blank');
}
search_naver_button.addEventListener('click', search_naver);

input.value = localStorage.getItem(KEY_NAVER);

input.addEventListener('keyup', e => {
	localStorage.setItem(KEY_NAVER, e.target.value);
	if (e.keyCode === 13) {
		search_naver();
	}
});
