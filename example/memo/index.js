const memo = document.getElementById('memo');
const KEY_MEMO = 'key:memo';

memo.value = localStorage.getItem(KEY_MEMO);

memo.onkeydown = () => {
    localStorage.setItem(KEY_MEMO, memo.value);
};
