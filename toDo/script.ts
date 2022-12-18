let list = []

interface Task {
    name: string;
}

let Inputvalue:string = (<HTMLInputElement>document.getElementById('Input')).value;

function addTask() {
    if (Inputvalue != "") {
        Inputvalue = (<HTMLInputElement>document.getElementById("Input")).value;
    }
    let t: Task = {
        name: Inputvalue
    };
    list.push(t);
    showTask(t, 'aufgabe');
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + list.length;
};

function showTask(task: Task, i) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.setAttribute("class",i);
    let box = document.createElement('input');
    box.setAttribute('type','checkbox');
    div.appendChild(box);
    let aufgabe = document.createElement('p');
    div.appendChild(aufgabe);
    aufgabe.innerHTML = task.name;
    let button = document.createElement('button');
    div.appendChild(button);
    button.innerHTML = 'X';
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + list.length;
}

function removeTask(task: Task) {
    let o = list.indexOf(task);
    list.splice(o, 1);
    /* Befehl, um HTML-Code zu löschen einfügen*/
    for (let i = 0; i < list.length; i++){
        showTask(list[i], "aufgabe");
    }
}



/* Test */
let test: Task= {
    name: "Test"
}
let test2: Task= {
    name: "Test2"
}
list.push(test);
list.push(test2);





document.querySelector('button').addEventListener('click', function(){
    removeTask(test);
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + list.length;
})

document.querySelector('#add').addEventListener('click', function() {
    addTask();
})


/* Ich weiß nicht, wie ich spezifische Dinge selecten kann - wüsste ich das, würde die Löschen-Funktion funktionieren 
Außerdem funktioniert das CSS nicht, ich weiß nicht, wieso, ich habe es auf verschiedene Arten probiert, es will nicht schöner aussehen als so, wie es ist, was nicht viel heißt
Und sobald ich eine Funktion geschrieben hab, um neue Dinge hinzuzufügen, ist der Teil, der die Elemente in HTML hinzugefügt hat, plötzlich weg gewesen...
Das hier ist die Bitte um Hilfe, aber mit dem Wissen, dass es heute nichts mehr wird, weil ich zu verwirrt bin und deswegen verlängere ich die Zeit bis Mittwoch...*/