const KEY_NAVER = 'key:googlesearch';
const search_naver_button = document.getElementById('googlesearch-button');
const input = document.getElementById('googlesearch-input');
function search_naver() {
	var keyword = input.value;
	window.open(`https://www.google.co.kr/search?source=hp&ei=r1GHXZmGDaGQr7wP5NmB6As&q=${keyword}`, '_blank');
}
search_naver_button.addEventListener('click', search_naver);

input.value = localStorage.getItem(KEY_NAVER);

input.addEventListener('keyup', e => {
	localStorage.setItem(KEY_NAVER, e.target.value);
	if (e.keyCode === 13) {
		search_naver();
	}
});
