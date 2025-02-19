const text = document.getElementById("text");

const happy = "(# ^_^)o__/";
const normal = "(# o_o)o__/";
const closeEyes = "(# -_-)o__/";
const sleep = ["(# -_-)o__/", "(# -_-)z__/", "(# -_-)zZ_/", "(# -_-)zzZ/"];

let normalMode = true;

function change(times, n) {
    if (times > 0) {
        if (n < 4) {
            text.innerHTML = sleep[n];
            n++;
        } else {
            n = 0;
            times--;
        }
        setTimeout("change(" + times + ',' + n + ")", 500);
    } else {
        normalMode = true;
        normalF();
    }
}
function sleepF() {
    normalMode = false;
    let times = Math.floor((Math.random() * 5) + 2);
    change(times, 0);
}
function happyF() {
    normalMode = false;
    text.innerHTML = happy;
    setTimeout("text.innerHTML = normal", Math.floor(Math.random() * 6) * 1000);
}
function winkEyes() {
    if (normalMode) {
        setTimeout(() => {
            text.innerHTML = normal;
            setTimeout(() => {
                text.innerHTML = closeEyes;
                winkEyes();
            }, 3000);
        }, 300);
    }
}
function normalF() {
    winkEyes();
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            sleepF();
        } else {
            happyF();
        }
    }, Math.floor(Math.random() * 20) * 1000);
}

normalF();