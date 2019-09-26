const vocaArr = [
    {
        word:"abandon",
        meaning:["(특히 돌볼 책임이 있는 사람을) 버리다", "(물건,장소를) 버리고 떠나다", "(지지,믿음을) 버리다"]
    },
    {
        word:"abash",
        meaning:["무안하게 하다, 당황하게 하다" ]
    },
    {
        word:"abrade",
        meaning:["[전문용어](암석 등을) 마멸시키다; 찰과상을 입히다"]
    },
    {
        word:"abrupt",
        meaning:["돌연한, 갑작스런", "퉁명스러운"]
    },
    {
        word:"accommodation",
        meaning:["거처; 숙소; 시설", "(흔히 식사나 다른 서비스들도 제공하는)숙박 시설", "[격식]합의; 협상"]
    },
    {
        word:"accompany",
        meaning:["[격식](사람과) 동반하다, 동행하다", "(일,현상 등이) 동반되다", "(특히 피아노로) 반주를 해주다"]
    },
    {
        word:"accomplish",
        meaning:["완수하다, 성취하다, 해내다"]
    },
    {
        word:"accord",
        meaning:["(기관,국가 간의 공식적인) 합의", "(권위, 지위 등을) 부여하다", "부합하다"]
    },
    {
        word:"accordance",
        meaning:["일치, 합치, 조화", "인가, 수여"]
    },
    {
        word:"accustom",
        meaning:["익히다, 익숙케 하다, 길들게 하다", "익숙해지다, 길들다"]
    },
    {
        word:"acquire",
        meaning:["(노력,능력으로)습득하다", "(사거나 받아서) 획득하다"]
    },
];


const SIZE_OF_DATA = vocaArr.length;
const voca = document.getElementById('voca');
const meaning = document.getElementById('meaning');

const setVoca = () => {
    const today = new Date();
    const day = Math.floor((today.getTime()/(24*60*60*1000))%SIZE_OF_DATA);
 
    voca.innerHTML = vocaArr[day].word;
    meanings = vocaArr[day].meaning.map((value, index) => {
        return `<b>${index+1}</b>.`+value;
    } ).join('<br/>');
    meaning.innerHTML = meanings;
}

setVoca();