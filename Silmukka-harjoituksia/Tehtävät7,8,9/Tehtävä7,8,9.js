function Yhteen() {
  yht = 0;

for(var y = 1; y <=10; y++) {
yht += y;
}
  document.getElementById('tulosta1').innerHTML = '<p>'+ yht + '</p>';
}
function LaskeY()
{
  var kor = document.getElementById('koro').value;
  var poten = document.getElementById('pote').value;
  yht = kor;
  for(var p = 1; p < poten; p++)
  {
    yht *= kor;
  }
  document.getElementById('tulosta2').innerHTML = '<p>' + yht + '</p>';
}
function Etsin()  {

var taulu = [], temp;

for(var x = 0; x < 5; x++)  {
temp = document.getElementById('taulukko['+x+']').value;
temp = parseInt(temp);
taulu.push(temp);
    //alert(taulu);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('tulosta3').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
