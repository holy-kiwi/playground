const defaultImg = document.getElementById("default_img");
const displayImg = document.getElementById("display_img");
const imgInput = document.getElementById("input");

const KEY_IMGVIEWER = 'key:imgviewer';


imgOnClick = () => {

    defaultImg.style.setProperty('display', 'none');
    displayImg.style.setProperty('display', 'none');
    imgInput.style.setProperty('display', 'inline');
    // imgInput.style.setProperty('display', 'none');
    // defaultImg.style.setProperty('display', 'inline');
    // displayImg.style.setProperty('display', 'inline');
}
defaultImg.onclick = imgOnClick;
displayImg.onclick = imgOnClick;



imgUpload = () => {
    console.log("===========이미지업로더가 변경되었다!==========");

    
    var curFiles = imgInput.files;
   
    if (curFiles.length === 1) {
        console.log("이미지가 정상적으로 input 되었다" + displayImg.src);


        displayImg.src = window.URL.createObjectURL(curFiles[0]);

        imgInput.style.setProperty('display', 'none');
        defaultImg.style.setProperty('display', 'none');
        displayImg.style.setProperty('display', 'inline');

        console.log(displayImg);
        localStorage.setItem(KEY_IMGVIEWER, displayImg.src);
    }
    else {
        console.log("이미지가 정상적으로 input 되지 않았다");
        loadImg();
        if (displayImg.src != null) {
            console.log("displayImg.src가 null이 아니다" + displayImg.src);
            imgInput.style.setProperty('display', 'none');
            defaultImg.style.setProperty('display', 'none');
            displayImg.style.setProperty('display', 'inline');
        }
        else {
            console.log("displayImg.src가 null이 맞다" + displayImg.src);
            imgInput.style.setProperty('display', 'none');
            defaultImg.style.setProperty('display', 'inline');
            displayImg.style.setProperty('display', 'none');
        }
    }
}
imgInput.addEventListener('change', imgUpload);


loadImg = () => {
    displayImg.src = localStorage.getItem(KEY_IMGVIEWER);
};
loadImg();