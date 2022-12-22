/*
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



/* Test
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


*/ 
//# sourceMappingURL=script.js.map