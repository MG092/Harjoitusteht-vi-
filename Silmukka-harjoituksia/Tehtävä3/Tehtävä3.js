function AnnaSana()  {

var aSana = document.getElementById('sana').value;
var vastaus = 'ei ole';

for(var k = 0; k < aSana.length; k++) {

if(aSana[k] == 'ö' || aSana[k] == 'Ö')  {
  vastaus = 'on';
}
}
document.getElementById('tulosta').innerHTML = '<p>' + vastaus + '</p>';
}
