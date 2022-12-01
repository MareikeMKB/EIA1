const soundh = new Audio('/L08/task_material/assets/DrumPad/hihat.mp3');
const soundk = new Audio('/L08/task_material/assets/DrumPad/kick.mp3');
const sounds = new Audio('/L08/task_material/assets/DrumPad/snare.mp3');
const sounda = new Audio('/L08/task_material/assets/DrumPad/A.mp3');
const soundc = new Audio('/L08/task_material/assets/DrumPad/C.mp3');
const soundf = new Audio('/L08/task_material/assets/DrumPad/F.mp3');
const soundg = new Audio('/L08/task_material/assets/DrumPad/G.mp3');
const soundl1 = new Audio('/L08/task_material/assets/DrumPad/laugh-1.mp3');
const soundl2 = new Audio('/L08/task_material/assets/DrumPad/laugh-2.mp3');
let song = [];
document.querySelector('#h').addEventListener('click', function () {
    soundh.play();
    song.push(soundh);
});
document.querySelector('#k').addEventListener('click', function () {
    soundk.play();
    song.push(soundk);
});
document.querySelector('#s').addEventListener('click', function () {
    sounds.play();
    song.push(sounds);
});
document.querySelector('#a').addEventListener('click', function () {
    sounda.play();
    song.push(sounda);
});
document.querySelector('#c').addEventListener('click', function () {
    soundc.play();
    song.push(soundc);
});
document.querySelector('#f').addEventListener('click', function () {
    soundf.play();
    song.push(soundf);
});
document.querySelector('#g').addEventListener('click', function () {
    soundg.play();
    song.push(soundg);
});
document.querySelector('#l1').addEventListener('click', function () {
    soundl1.play();
    song.push(soundl1);
});
document.querySelector('#l2').addEventListener('click', function () {
    soundl2.play();
    song.push(soundl2);
});
let counter = 0;
document.querySelector('#image').addEventListener('click', function () {
    setInterval(function () {
        song[counter].play();
        counter++;
    }, 700);
});
//# sourceMappingURL=script.js.map