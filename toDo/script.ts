

interface Task {
    name: string;
}

let Inputvalue
let count = 0;

function addTask() {
    if (Inputvalue != "") {
        Inputvalue = (<HTMLInputElement>document.getElementById("Input")).value;
    }
    let t: Task = {
        name: Inputvalue
    };
    showTask(t, 'aufgabe');
    count ++;
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + count;
};

function showTask(task: Task, i) {
    let div = document.createElement('div');
    div.setAttribute("class",i);
    document.body.appendChild(div);
    let box = document.createElement('input');
    box.setAttribute('type','checkbox');
    div.appendChild(box);
    let aufgabe = document.createElement('p');
    div.appendChild(aufgabe);
    aufgabe.innerHTML = task.name;
    let button = document.createElement('button');
    div.appendChild(button);
    button.innerHTML = 'X';
    button.addEventListener('click', function(){
        this.parentNode.parentNode.removeChild(this.parentNode)
        count = count-1
        document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + count;
    })
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + count;
}

/* function showTask(task: Task, i) {
    /*let div = document.createElement('div');
    document.getElementById('#sachen').appendChild(div);
    div.setAttribute("class",i);
    let box = document.createElement('input');
    box.setAttribute('type','checkbox');
    document.getElementById('#sachen').appendChild(box);
    let aufgabe = document.createElement('p');
    document.getElementById('#sachen').appendChild(aufgabe);
    aufgabe.innerHTML = task.name;
    let button = document.createElement('button');
    document.getElementById('#sachen').appendChild(button);
    button.innerHTML = 'X';
    document.querySelector('h2').innerHTML = "Anzahl der Aufgaben: " + count;
}
*/


/* Test */
count = 2
let test: Task= {
    name: "Platzhalter1"
}
let test2: Task= {
    name: "Platzhalter2"
} 


showTask(test, 'aufgabe');
showTask(test2, 'aufgabe');






document.querySelector('#add').addEventListener('click', function() {
    addTask();
})


/* Ich weiß nicht, wie ich spezifische Dinge selecten kann - wüsste ich das, würde die Löschen-Funktion funktionieren 
Außerdem funktioniert das CSS nicht, ich weiß nicht, wieso, ich habe es auf verschiedene Arten probiert, es will nicht schöner aussehen als so, wie es ist, was nicht viel heißt
Und sobald ich eine Funktion geschrieben hab, um neue Dinge hinzuzufügen, ist der Teil, der die Elemente in HTML hinzugefügt hat, plötzlich weg gewesen...
Das hier ist die Bitte um Hilfe, aber mit dem Wissen, dass es heute nichts mehr wird, weil ich zu verwirrt bin und deswegen verlängere ich die Zeit bis Mittwoch...*/