function PienSuur()
{

var num = [8,9,19,2,5]

num.sort(function(a,b){return a - b});

var pienin = num.shift();
var suurin = num.pop();

console.log("Pienin " + pienin + " Suurin " + suurin);

}
