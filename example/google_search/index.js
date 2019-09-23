const search_google_button = document.getElementById('search_google_button');
function search_google() {
	var keyword = document.getElementById('search_google_keyword').value;
	window.open(`https://www.google.co.kr/search?source=hp&ei=r1GHXZmGDaGQr7wP5NmB6As&q=${keyword}`, '_blank');
}
search_google_button.addEventListener('click', search_google);
