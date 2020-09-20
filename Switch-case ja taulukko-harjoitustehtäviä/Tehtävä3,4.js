function MTaulukko() {

var jono = [];
jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
var taulu = '<table border="1">';
for(var j = 0; j < jono.length; j++)  {

taulu += '<tr>';
for(var k = 0; k < jono[j].length; k++) {
taulu += '<td>' + jono[j][k] + '</td>';
}
taulu += '</tr>';
}
taulu += '</table>';
document.getElementById('tulosta1').innerHTML = taulu;
}

function Arvo() {

var pakka = [''];
var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
laskuri = 0;

for(m = 0; m < maat.length; m++)  {
for(n = 0; n < numerot.length; n++) {

if(m == maat.length-1 && n == numerot.length-1) {
pakka[laskuri] = maat[m] + numerot[n];
}

else {
pakka[laskuri] = maat[m]+numerot[n];
laskuri++;
}
}
}
var kortit = [];
for(l = 0; l < 5; l++)  {
temp = pakka[Math.floor(Math.random()*52)];
kortit[l] = temp;
}
document.getElementById('tulosta2').innerHTML = '<p>'+kortit+'</p>';
}
