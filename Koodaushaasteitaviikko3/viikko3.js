function PieSuur(num)
{

num.sort();

var pienin = num.shift();
var suurin = num.pop();

console.log("Pienin: " + pienin + "Suurin: " + suurin);
}
