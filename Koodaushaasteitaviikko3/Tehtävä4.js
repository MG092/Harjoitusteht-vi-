function tiedot(etunimi, sukunimi, laosoite, pnumero, ptoimipaikka, puh, email) {


this.etunimi = etunimi,
this.sukunimi = sukunimi,
this.lahiosoite = laosoite,
this.pnostinumero = pnumero,
this.postitoimipaikka = ptoimipaikka,
this.puhelinnumero = puh,
this.sahkoposti = email
}

var Mikko = new tiedot("Mikko", "Testaaja", "Osoite 3", "01460", "Vantaa",
"0487827384", "Mikko.Testaaja@hotmail.fi")
var Jutta = new tiedot("Jutta", "Testaaja", "Osoite 11", "02000", "Espoo",
"04042734", "Jutta.Testaaja@hotmail.fi")
var Toni = new tiedot("Toni", "Testaaja", "Osoite 32", "01680", "Helsinki",
"050768923", "Toni.Testaaja@hotmail.fi")



console.log(Jutta.postitoimipaikka);
