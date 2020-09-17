function Kerto() {

var kLuku = document.getElementById('luvut').value;
var vastaus = 1;

for(var z = 1; z <= kLuku; z++) {
  vastaus*=z;
}

document.getElementById('tulosta1').innerHTML = '<p>Luvun ' + kLuku + ' kertoma on '+vastaus + '</p>';
}

function Sanat()  {

var tulostaa = '';
for(var y = 1; y <= 100; y++) {

if(y%3==0 && y%5==0)  {
tulostaa+='Hip Heijaa ';
}

else if(y%5 == 0) {
tulostaa+='Heijaa ';
}

else if(y%3 == 0) {
tulostaa+='Hip ';
}

else {
tulostaa+=y+' ';
}

document.getElementById('tulosta2').innerHTML = tulostaa;
}
}

function num() {

var kymmenet = '<p>';

for(var e = 1; e <=10; e++) {
kymmenet += e + ' ';
}

kymmenet += '</p>';
document.getElementById('tulosta3').innerHTML = kymmenet;
}
