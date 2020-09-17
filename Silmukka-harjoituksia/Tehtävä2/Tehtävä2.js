function Psalasana() {

var ksana = document.getElementById('sana').value;
var salasana = "<p>";

for(var j = 0; j < ksana.length; j++) {

salasana += ksana[j] + 'Ö';
}

salasana += "</p>";
document.getElementById('tulosta').innerHTML = salasana;
}
