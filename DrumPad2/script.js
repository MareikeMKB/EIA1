const soundh = new Audio('./task_material/assets/DrumPad/hihat.mp3');
const soundk = new Audio('./task_material/assets/DrumPad/kick.mp3');
const sounds = new Audio('./task_material/assets/DrumPad/snare.mp3');
const sounda = new Audio('./task_material/assets/DrumPad/A.mp3');
const soundc = new Audio('./task_material/assets/DrumPad/C.mp3');
const soundf = new Audio('./task_material/assets/DrumPad/F.mp3');
const soundg = new Audio('./task_material/assets/DrumPad/G.mp3');
const soundl1 = new Audio('./task_material/assets/DrumPad/laugh-1.mp3');
const soundl2 = new Audio('./task_material/assets/DrumPad/laugh-2.mp3');
let song = [sounds, soundh, sounds, soundk];
const sound = [soundh, soundk, sounds, sounda, soundc, soundf, soundg, soundl1, soundl2];
let a = 0;
function playsound(temp) {
    temp.play();
    if (a == 1) {
        song.push(temp);
    }
}
function record() {
    song = [];
    if (a == 0) {
        a = 1;
    }
    else
        a = 0;
}
document.querySelector('#h').addEventListener('click', function () {
    playsound(soundh);
});
document.querySelector('#k').addEventListener('click', function () {
    playsound(soundk);
});
document.querySelector('#s').addEventListener('click', function () {
    playsound(sounds);
});
document.querySelector('#a').addEventListener('click', function () {
    playsound(sounda);
});
document.querySelector('#c').addEventListener('click', function () {
    playsound(soundc);
});
document.querySelector('#f').addEventListener('click', function () {
    playsound(soundf);
});
document.querySelector('#g').addEventListener('click', function () {
    playsound(soundg);
});
document.querySelector('#l1').addEventListener('click', function () {
    playsound(soundl1);
});
document.querySelector('#l2').addEventListener('click', function () {
    playsound(soundl2);
});
let counter = 0;
document.querySelector('#play').addEventListener('click', function () {
    setInterval(function () {
        playsound(song[counter]);
        if (counter >= song.length - 1) {
            counter = 0;
        }
        else
            counter++;
    }, 1000);
});
function randint() {
    let temp = Math.random();
    temp = temp * 10;
    temp = Math.round(temp);
    return temp;
}
function remix() {
    song = [];
    let int = randint();
    while (int > sound.length) {
        int = randint();
    }
    let count = randint();
    while (count > 0) {
        song.push(sound[int]);
        count--;
        while (int > sound.length) {
            int = randint();
        }
    }
}
//# sourceMappingURL=script.js.map