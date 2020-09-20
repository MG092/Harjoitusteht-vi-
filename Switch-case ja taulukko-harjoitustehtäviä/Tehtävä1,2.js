function Lasketaan()
{
  var pisteet = 0;
  var annSana = document.getElementById('Asana').value;
  for(var i = 0; i < annSana.length; i++)
  {
switch (annSana[i]) {
  case 'a':
  case 'e':
  case 'i':
  case 'n':
  case 's':
  case 't':
  case 'A':
  case 'E':
  case 'I':
  case 'N':
  case 'S':
  case 'T':
pisteet++;
  break;
  case 'o':
  case 'ä':
  case 'k':
  case 'l':
  case 'O':
  case 'Ä':
  case 'K':
  case 'L':
pisteet+=2;
  break;
  case 'u':
  case 'm':
  case 'U':
  case 'M':
pisteet+=3;
  break;
  case 'y':
  case 'h':
  case 'j':
  case 'p':
  case 'r':
  case 'v':
  case 'Y':
  case 'H':
  case 'J':
  case 'P':
  case 'R':
  case 'V':

pisteet+=4;

break;
  case 'ö':
  case 'd':
  case 'Ö':
  case 'D':
pisteet+=7;

  break;
  case 'b':
  case 'f':
  case 'g':
  case 'B':
  case 'F':
  case 'G':

pisteet+=8;

  break;
  case 'c':
  case 'C':

pisteet+=10;

  break;
  default:

pisteet+=12;
    }
    document.getElementById('tulosta1').innerHTML = "<p>Sanan " + annSana + " pisteet ovat: " + pisteet + "</p>";
  }
}
function Arvo()
{
var lnumerot = [];
var temp;
for(var lotto = 0; lotto < 7; lotto++)
  {
temp = Math.floor(Math.random()*40)+1;
lnumerot[lotto] = temp;
  }
lnumerot.sort(/*function(a, b){return a-b}*/);

  document.getElementById('tulosta2').innerHTML = '<p>'+lnumerot+'</p>';
}
