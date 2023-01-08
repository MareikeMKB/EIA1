let Inputvalue;
let count = 0;
function addTask() {
    if (Inputvalue != "") {
        Inputvalue = document.getElementById("Input").value;
    }
    let t = {
        name: Inputvalue
    };
    showTask(t, 'aufgabe');
    count++;
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + count;
}
;
function showTask(task, i) {
    let div = document.createElement('div');
    div.setAttribute("class", i);
    document.getElementById('sachen').appendChild(div);
    var sp2 = document.getElementById('sachen');
    var parentDiv = sp2.firstChild;
    sp2.insertBefore(div, parentDiv);
    let box = document.createElement('input');
    box.setAttribute('type', 'checkbox');
    div.appendChild(box);
    let aufgabe = document.createElement('p');
    div.appendChild(aufgabe);
    aufgabe.innerHTML = task.name;
    let button = document.createElement('button');
    div.appendChild(button);
    button.innerHTML = 'X';
    button.addEventListener('click', function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        count = count - 1;
        document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + count;
    });
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + count;
    /* Mach Liste mit allen divs wieder rein, weil mit insertBefore(wasManEinfügenWill,vorWasManEinfügt) auf divs spezifisch zugegriffen werden kann und dann sollte das mit vorher einfügen theoretisch klappen
    Wenn nicht, dann https://developer.mozilla.org/en-US/docs/Web/API/Element/before probieren
    InsertBefore hat bei Judith geklappt mit wrapper um alle divs*/
}
/* Test */
count = 2;
let test = {
    name: "Platzhalter1"
};
let test2 = {
    name: "Platzhalter2"
};
showTask(test, 'aufgabe');
showTask(test2, 'aufgabe');
document.querySelector('#add').addEventListener('click', function () {
    addTask();
});
//# sourceMappingURL=script.js.map