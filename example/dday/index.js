const message_input = document.getElementById("message_input");

const down = document.getElementById("down");
const date_msg = document.getElementById("date_msg");
const date_picker = document.getElementById("date_picker");

const dday = document.getElementById("dday");

const DEFAULT_MSG = "type the message..."
const MSEC_PER_DAY = 24*60*60*1000;

const KEY_DDAY_MSG = "key:dday_msg";
const KEY_DDAY_DAY = "key:dday_day";

function replaceall(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

function loadMsg() {
    message_input.value = localStorage.getItem(KEY_DDAY_MSG);
    if(message_input.value===""){
        message_input.value = DEFAULT_MSG;
    }
}

//메시지 부분 누르면 초기화 되는 부분
message_input.onclick = () => {
    message_input.value = "";
}

//메시지 localStorage에 저장하고 받아오는 부분
loadMsg();
message_input.onkeyup = () => {
    // console.log(message_input.value);
    localStorage.setItem(KEY_DDAY_MSG, message_input.value);
};

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
    }
}
//date_picker에서 날짜를 고르면 현재 날짜와 비교하여 적절한 메시지("D-XXX" or "XXX일") 설정해주는 부분
date_picker.addEventListener('change', (e)=> {
    const pday = new Date(e.target.value).getTime();
    const nday = new Date().getTime();
    let diff = Math.floor((pday - nday)/MSEC_PER_DAY)+1;

    if (diff < 0) {
        diff = diff*-1;
        dday.innerHTML = `${diff}일`;
    }
    else {
        dday.innerHTML = `D-${diff}`;
    }
})




