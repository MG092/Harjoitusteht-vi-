function Tarkastakvuosi()
{
    kvuosi = document.getElementById('kvuosi').value;
if(kvuosi%4 == 0 && kvuosi%100 != 0)
 {
   document.getElementById('tulosta3').innerHTML = "Vuosi on karkausvuosi";
}
else if (kvuosi%400 ==0) {
  document.getElementById('tulosta3').innerHTML = "Vuosi on karkausvuosi";
}

else {
document.getElementById('tulosta3').innerHTML = "Vuosi ei ole karkausvuosi"
}
}
