const message_input = document.getElementById("message_input");

const  down= document.getElementById("down");
const date_msg = document.getElementById("date_msg");
const date_picker = document.getElementById("date_picker");

const dday = document.getElementById("dday");

const DEFAULT_MSG = "type the message..."
const MSEC_PER_DAY = 24*60*60*1000;

let date_picker_clicked = false;

const KEY_DDAY_MSG = "key:dday_msg";
const KEY_DDAY_DAY = "key:dday_day";


// message_input.addEventListener('click', e => {
//     e.target.placeholder = "";
// });
message_input.onclick = () => {
    message_input.value = "";
}
// message_input.addEventListener('change', e => {
//     if (e.target.value===""){
//         e.target.placeholder = DEFAULT_MSG;
//     }
// });

// message_input.onkeydown = () => {
//     if (message_input.value === ""){
//         message_input.value= DEFAULT_MSG;
//     }
// }
message_input.onblur = () => {
    if (message_input.value === ""){
        message_input.value= DEFAULT_MSG;
    }

};

down.addEventListener('click', e => {
    date_picker_clicked = !date_picker_clicked;

    if (date_picker_clicked) {
        date_msg.style.setProperty('display', 'none');
        date_picker.style.setProperty('display', 'inline');
    } 
});

date_picker.addEventListener('change', e => {
    const picked_day = e.target.value;
    const pday = new Date(picked_day).getTime();
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





