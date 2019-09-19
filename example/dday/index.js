const message_input = document.getElementById("message_input");
const down = document.getElementById("down");
const date_msg = document.getElementById("date_msg");
const date_picker = document.getElementById("date_picker");
const dday = document.getElementById("dday");

const DEFAULT_MSG = "type the message...";
const DEFAULT_DAY = "click here to input the date!";
const DEFAULT_REMAIN = "D-DAY";
const MSEC_PER_DAY = 24*60*60*1000;

const KEY_DDAY_MSG = "key:dday_msg";
const KEY_DDAY_DAY = "key:dday_day";
const KEY_DDAY_REMAIN = "key:dday_remain";

function replaceall(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

//localStorage에 저장된 message_input, date_msg, dday 불러오는 부분
function load() {
    loadMsg();
    loadDay();
    loadRemain();
}
function loadMsg() {
    message_input.value = localStorage.getItem(KEY_DDAY_MSG);
    if(message_input.value===""){
        message_input.value = DEFAULT_MSG;
    }
}
function loadDay() {
    date_msg.value = localStorage.getItem(KEY_DDAY_DAY);
    if (date_msg.value === "") {
        date_msg.value = DEFAULT_DAY;
    } 
}
function loadRemain() {
    dday.innerHTML = localStorage.getItem(KEY_DDAY_REMAIN);
    if (dday.innerHTML === ""){
        dday.innerHTML = DEFAULT_REMAIN;
    }
}
load();
//불러오는 부분 끝



//localStorage에 message_input, date_msg, dday 저장하는 부분

//message_input localStorage에 저장하는 부분
message_input.onkeyup = () => {

    localStorage.setItem(KEY_DDAY_MSG, message_input.value);
};

//date_picker에서 날짜를 고르면 date_msg와 dday 저장하고
//현재 날짜와 비교하여 적절한 메시지("D-XXX" or "XXX일")를 dday에 설정해주는 부분
date_picker.addEventListener('change', (e)=> {

    if(date_picker.value != "") {
        date_msg.value = replaceall(date_picker.value, "-", ".");
        localStorage.setItem(KEY_DDAY_DAY, date_msg.value);
    }

    const pday = new Date(e.target.value).getTime();
    const nday = new Date().getTime();
    let diff = Math.floor((pday - nday)/MSEC_PER_DAY)+1;

    if (diff <= 0) {
        diff = diff*-1;
        diff++;
        dday.innerHTML = `${diff}일`;
    }
    else {
        dday.innerHTML = `D-${diff}`;
    }

    localStorage.setItem(KEY_DDAY_REMAIN, dday.innerHTML);
})
//저장하는 부분 끝


//이후 부분은 좋은 UX를 위해 구현한 부분

//메시지 부분 누르면 초기화 되는 부분
message_input.onclick = () => {
    message_input.value = "";
}


//메시지 빈칸상태인데 다른 곳으로 focus 이동할때 처리하는 부분
message_input.onblur = () => {
    if (message_input.value === ""){
        message_input.value= DEFAULT_MSG;
    }
};


//하부 클릭하면 date_picker 활성화 시켜주고 date_msg 비활성화 시키는 부분
down.onclick = () => {
    
    date_msg.style.setProperty('display', 'none');
    date_picker.style.setProperty('display', 'inline');
    date_picker.focus();
}


//하부 클릭했다가 다른데 클릭하면 date_picker 비활성화 시켜주고 date_msg 활성화 시키는 부분
date_picker.onblur = () => {
    
    date_msg.style.setProperty('display', 'inline');
    date_picker.style.setProperty('display', 'none');

    if(date_picker.value != "") {
        date_msg.value = replaceall(date_picker.value, "-", ".");
        localStorage.setItem(KEY_DDAY_DAY, date_msg.value);
    }
}
