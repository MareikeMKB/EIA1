const einwohnereu = 447010000;
const einwohnereup = 501100000;
const prozente = 100;
const prozentep = (einwohnereu - einwohnereup) * 100 / einwohnereup;
const einwohnereud = einwohnereu - einwohnereup;
const einwohnerf = 65617812;
const einwohnerfp = 62879530;
const prozentf = einwohnerf * 100 / einwohnereu;
const prozentfp = (einwohnerf - einwohnerfp) * 100 / einwohnerfp;
const einwohnerfd = einwohnerf - einwohnerfp;
const einwohnerd = 84424123;
const einwohnerdp = 80827002;
const prozentd = einwohnerd * 100 / einwohnereu;
const prozentdp = (einwohnerd - einwohnerdp) * 100 / einwohnerdp;
const einwohnerdd = einwohnerd - einwohnerdp;
const einwohneri = 60251810;
const einwohnerip = 59325229;
const prozenti = einwohneri * 100 / einwohnereu;
const prozentip = (einwohneri - einwohnerip) * 100 / einwohnerip;
const einwohnerid = einwohneri - einwohnerip;
const einwohners = 10250905;
const einwohnersp = 9390168;
const prozents = einwohners * 100 / einwohnereu;
const prozentsp = (einwohners - einwohnersp) * 100 / einwohnersp;
const einwohnersd = einwohners - einwohnersp;
function percentEU(var1, var2) {
    return ((var2 / var1) * 100);
}
let yellow1 = percentEU(einwohnereu, einwohnerd);
let yellow2 = percentEU(einwohnereu, einwohnerf);
let yellow3 = percentEU(einwohnereu, einwohneri);
let yellow4 = percentEU(einwohnereu, einwohners);
let yellow5 = percentEU(einwohnereu, einwohnereu);
function Ausgabe(value1, value2, value3, value4, value5, value6) {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + value1;
    document.querySelector('#text').innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + value1 + " in 2022";
    document.querySelector('#total').innerHTML = value2;
    document.querySelector("#EU").innerHTML = value3 + '%';
    document.querySelector("#growth").innerHTML = value4 + '%';
    document.querySelector('#growthp').innerHTML = value5 + '';
    document.querySelector('.chart').setAttribute("style", "height:" + value6 + "%;");
}
document.querySelector('.germany').addEventListener('click', function () {
    Ausgabe("Deutschland", einwohnerd, prozentd, prozentdp, einwohnerdd, yellow1);
});
document.querySelector('.france').addEventListener('click', function () {
    Ausgabe("Frankreich", einwohnerf, prozentf, prozentfp, einwohnerfd, yellow2);
});
document.querySelector('.italy').addEventListener('click', function () {
    Ausgabe("Italien", einwohneri, prozenti, prozentip, einwohnerid, yellow3);
});
document.querySelector('.sweden').addEventListener('click', function () {
    Ausgabe("Schweden", einwohners, prozents, prozentsp, einwohnersd, yellow4);
});
document.querySelector('.stars').addEventListener('click', function () {
    Ausgabe("der Europäischen Union", einwohnereu, prozente, prozentep, einwohnereud, yellow5);
});
/* Warum auch immer hat es nicht so funktioniert, wie es soll, ich verstehe es nicht, aber die Zeit ist ziemolich um,
Deswegen habe ich schon Mal abgegeben und werde es bis Mittwoch noch Mal probieren*/
/* console.log ('FRANKREICH')
console.log('Frankreich hat im Jahr 2022 ' + einwohnerf + ' Einwohner.');
console.log('Das sind ' + prozentf + '% der Einwohner der EU.');
console.log('Im Vergleich zu 2010 sind das ' + prozentfp + '% mehr Einwohner.');
console.log('Das ist eine Differenz von ' + einwohnerfd + ' Einwohnern.');

console.log ('DEUTSCHLAND')
console.log('Deutschland hat im Jahr 2022 ' + einwohnerd + ' Einwohner.');
console.log('Das sind ' + prozentd + '% der Einwohner der EU.');
console.log('Im Vergleich zu 2010 sind das ' + prozentdp + '% mehr Einwohner.');
console.log('Das ist eine Differenz von ' + einwohnerdd + ' Einwohnern.');

console.log ('ITALIEN')
console.log('Italien hat im Jahr 2022 ' + einwohneri + ' Einwohner.');
console.log('Das sind ' + prozenti + '% der Einwohner der EU.');
console.log('Im Vergleich zu 2010 sind das ' + prozentip + '% mehr Einwohner.');
console.log('Das ist eine Differenz von ' + einwohnerid + ' Einwohnern.');

console.log ('SCHWEDEN')
console.log('Schweden hat im Jahr 2022 ' + einwohners + ' Einwohner.');
console.log('Das sind ' + prozents + '% der Einwohner der EU.');
console.log('Im Vergleich zu 2010 sind das ' + prozentsp + '% mehr Einwohner.');
console.log('Das ist eine Differenz von ' + einwohnersd + ' Einwohnern.'); */
//# sourceMappingURL=script.js.map