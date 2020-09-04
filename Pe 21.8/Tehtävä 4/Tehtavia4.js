function TarkastakArvo()
{
  var luku1, luku2, luku3, luku4, luku5, summa, keskiarvo;
  luku1 = parseInt(document.getElementById('lukuu1').value);
  luku2 = parseInt(document.getElementById('lukuu2').value);
  luku3 = parseInt(document.getElementById('lukuu3').value);
  luku4 = parseInt(document.getElementById('lukuu4').value);
  luku5 = parseInt(document.getElementById('lukuu5').value);
  summa = luku1 + luku2 + luku3 + luku4 + luku5;
  keskiarvo = summa / 5;
  document.getElementById('tulosta4').innerHTML = "Lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo;
}
