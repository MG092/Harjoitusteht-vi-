function Tarkastavpaiva()
{
var vpaiva = document.getElementById('vpaiva').value;
if (vpaiva == 1)
 {
   document.getElementById('tulosta2').innerHTML = "Viikonpäivä on maanantai";
}
else if (vpaiva == 2)
{
document.getElementById('tulosta2').innerHTML = "Viikonpäivä on tiistai"
}
else if (vpaiva == 3)
{
  document.getElementById('tulosta2').innerHTML = "Viikonpäivä on keskiviikko"
}
else if (vpaiva == 4)
{
  document.getElementById('tulosta2').innerHTML = "Viikonpäivä on torstai";
}
else if(vpaiva == 5)
{
  document.getElementById('tulosta2').innerHTML = "Viikonpäivä on perjantai";
}
else if(vpaiva == 6)
{
  document.getElementById('tulosta2').innerHTML = "Viikonpäivä on lauantai";
}
else if(vpaiva == 7)
{
  document.getElementById('tulosta2').innerHTML = "Viikonpäivä on sunnuntai";
}
else {
    document.getElementById('tulosta2').innerHTML = "Luku ei kuulu viikonpäivälle";



}
}
