const allVideo = Array.from(document.querySelectorAll("ul li"));
const jumlahVideo = document.getElementsByClassName('jumlah-video')[0];
const totalDurasi = document.getElementsByClassName('total-durasi')[0];
const javascriptVideo = javascriptVideoFilter(allVideo);
jumlahVideo.innerHTML  = javascriptVideo.length;


function javascriptVideoFilter(allVideo){
    const newVideo = allVideo.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'));
    return newVideo;
}

const duration = getDurationArray(javascriptVideo);
const minuteDuration = minuteToSecond(getMinuteArray(duration));
const secondDuration = getSecondArray(duration);
const totalSecondFromMinute = sumOfSecond(minuteDuration);
const totalSecondFromSecond = sumOfSecond(secondDuration);
totalDurasi.innerHTML = time(totalSecondFromMinute + totalSecondFromSecond);


function minuteToSecond(minutes){
    const seconds = minutes.map(x => x * 60);
    return seconds;
}

function sumOfSecond(number){
    const sum = number.reduce((accumulator, currentValue)=>
    accumulator + currentValue);
    return sum;
}

function time(totalSeconds){
    hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    return `${hours} Jam ${minutes} Menit ${seconds} Detik`;

}

function getSecondArray(duration){
    let secondArray = [];
    for(let i = 0; i<duration.length;i++){
        secondArray.push(Number(duration[i][3] + duration[i][4]));
    }
    return secondArray;
}
function getMinuteArray(duration){
    let minuteArray = [];
    for(let i = 0; i<duration.length;i++){
        minuteArray.push(Number(duration[i][0] + duration[i][1]));
    }
    return minuteArray;
}
function getDurationArray(video){
    let videoDuration = [];
    for(let i = 0; i<video.length; i++){
        videoDuration.push(video[i].dataset.duration);
    }
    return videoDuration;
}









