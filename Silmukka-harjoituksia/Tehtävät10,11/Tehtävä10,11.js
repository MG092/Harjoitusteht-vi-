function Arpoo()  {

var pe = '';
var eka, toka;
pe = document.getElementById('sala').value;
var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
var temp = [];
var lop='';
for(var s = 0; s < pe.length; s++)  {

eka = pe[s];
temp.push(eka);

var lisa = Math.floor(Math.random()*taulu.length);
toka = taulu[lisa];
temp.push(toka);
}
lop = temp.join('');
document.getElementById('tulosta1').innerHTML = lop;
}

function Pari() {

var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
nro1 = parseInt(document.getElementById('pnro').value);
nro2 = document.getElementById('inro').value;

if(nro1%2 == 0) {
palku = nro1;
}

else {
palku = nro1+1;
}

for(var b = palku; b<=nro2; b+=2) {
pluvut += b + ' ';
psumma += b;
}

if(nro1%2 == 0) {
ralku = nro1+1;
}

else {
ralku = nro1;
}

for(var r = ralku; r<=nro2; r+=2) {
rluvut += r + ' ';
rsumma += r;
}
document.getElementById('tulosta2').innerHTML = '<p>Parilliset numerot: ' +
pluvut +' ja niiden summa: ' + psumma +
'</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
