function tulostaP()
{

var luvut = parseInt(document.getElementById('num').value);
var jono = "<p>";

for(var i = 2; i <= luvut; i= i+2)  {

jono+=i;
jono+=" ";  }

jono+="</p>";

document.getElementById('tulosta').innerHTML = jono;
}
