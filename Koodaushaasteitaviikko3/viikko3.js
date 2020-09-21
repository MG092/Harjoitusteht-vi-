function PienSuur() {

var num = [15, 2, 5, 4, 9]


num.sort(function(a, b) {
    return a - b;

})

var pienin = num.shift()
var suurin = num.pop()

console.log("Pienin " + pienin + " Suurin " + suurin);

}
