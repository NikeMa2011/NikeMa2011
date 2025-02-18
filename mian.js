const text = document.getElementById("text");

const happy = "(# ^_^)o__/";
const normal = "(# o_o)o__/";
const closeEyes = "(# -_-)o__/";
const sleep = ["(# -_-)o__/", "(# -_-)z__/", "(# -_-)zZ_/", "(# -_-)zzZ/"];

let normalMode = true;
let timesOut;

function change(times, n) {
    if (times > 0) {
        if (n < 4) {
            text.innerHTML = sleep[n];
            n ++;
        } else {
            n = 0;
            times --;
        }
        console.log(times);
        setTimeout("change(" + times + ',' + n + ")", 500);
    } else {
        normalMode = true;
        normalF();
    }
}
function sleepF() {
    let times = Math.floor(Math.random() * 5);
    change(times, 0);
    console.log(99);
}
function winkEyes() {
    setTimeout(() => {
        text.innerHTML = closeEyes;
        setTimeout("text.innerHTML = normal", 3000);
    }, 90);
}
function stop() {
    clearTimeout(timesOut);
}
function normalF() {
    if(normalMode) {
        winkEyes();
        normalF();
    }
}

normalF();