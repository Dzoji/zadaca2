//SVE ZADATKE ODRADITI KROZ FUNKCIJE

// 1. Ispisati u konzoli svoje ime I prezime.

function ispis1() {
    console.log("Djordje Nenadovic")
}
ispis1();

/* 2. Napraviti jednu varijablu I smjestiti u njoj svoje ime I prezime 
I nakon toga ispisati u konzoli vrijednost te varijable. */

var ImePrezime = "Djordje Nenadovic"

function ispis2() {
    console.log(ImePrezime);
}
ispis2(ImePrezime);

/* 3. Napraviti dve varijable I dati im vrijednosti cijelog broja po 
želji. Zatim u konzoli ispisati zbir, razliku, proizvod, količnik i 
ostatak ta dva broja. */

    var broj1 = 5
    var broj2 = 3

function zbir(x, y) {
    console.log("zbir je " + (x + y))
}
    zbir(broj1, broj2);

function razlika(x, y) {
    console.log("razlika je " + (x - y))
}
razlika(broj1, broj2);

function proizvod(x, y) {
    console.log("proizvod je " + (x * y))
}
proizvod(broj1, broj2);

function kolicnik(x, y) {
    
    console.log("kolicnik je " + (x / y))
}
kolicnik(broj1, broj2);

/* 4. Napraviti pet varijabli I dati im vrijednosti cijelog broja po 
želji. Zatim u konzoli ispisati zbir, razliku i proizvod tih 
brojeva. */

var br1 = 1
var br2 = 2
var br3 = 3
var br4 = 4
var br5 = 5

function zbir5(a, b, c, d, e) {
    console.log( "zbir je " + (a + b + c + d + e));
}
zbir(br1, br2, br3, br4, br5)

function razlika5(a, b, c, d, e) {
    console.log( "razlika je " + (a - b - c - d - e));
}
razlika(br1, br2, br3, br4, br5);

function proizvod5(a, b, c, d, e) {
    console.log( "proizvod je " + (a * b * c * d * e));
}
proizvod(br1, br2, br3, br4, br5);

/* 5. Napraviti 2 varijable jedna sadrži vaše ime, druga prezime. Provjeriti u konzoli šta će se desiti kada saberete/spojite te dve varijable. Vjerovatno je rezultat npr. “MarkoMarkovic”. Kako da dodamo razmak između “Marko” I “Marković” tako da ne mjenjamo varijable? */

var ime = "Djordje"
var prezime = "Nenadovic"

function ispis(a, b) {
console.log(a + " " + b) //bez razmaka bi bilo (a + b)
}
ispis(ime, prezime)

/* 6. Napraviti varijablu danUSedmici provjeriti da li ta varijabla odgovara rednom broju dana u sedmici I ispisati taj dan (napisati provjeru kroz if, else if, else I kroz switch). Npr. ako je varijabla 1 onda da ispiše u konzoli „Ponedeljak“, ako je 2 onda „Utorak“... Ako je varijabla broj koji ne predstavlja dan u sedmici onda da se ispiše „GREŠKA“. */

//if, else
var danUSedmici = 8

function sedmica(dan) {
    if (dan == 1)
console.log("Ponedeljak")
	else if (dan == 2)
console.log("Utorak")
	else if (dan == 3)
console.log("Srijeda")
	else if (dan == 4)
console.log("Cetvrtak")
	else if (dan == 5)
console.log("Petak")
	else if (dan == 6)
console.log("Subota")
	else if (dan == 7)
console.log("Nedelja")
	else
console.log("GRESKA")
}

sedmica(7);

//switch
var danUSedmici = 7

function sedmicaSwitch(switchdan) {
switch(switchdan){
  case 1:
console.log("ponedeljak")
    break;
  case 2:
console.log("Utorak")
    break;
  case 3:
console.log("Srijeda")
    break;
  case 4:
console.log("Cetvrtak")
    break;
  case 5:
console.log("Petak")
    break;
  case 6:
console.log("Subota")
    break;
  case 7:
console.log("Nedelja")
    break;
  default:
console.log( "GREŠKA")
}
}

sedmicaSwitch(5)

/* 7.	Napraviti varijablu broj, dati joj vrijednost cijelog broja po želji I provjeriti da li je taj broj paran ili neparan. Ako je paran onda ispisati u konzoli “Broj je paran”. Ako je neparan da se ispiše “Broj je neparan”. */

var broj = 10

function parnost(n) {
    if(n % 2 == 0) {
        console.log(n + " je paran")
    }else{
        console.log(n + " je neparan")
    }
}
parnost(broj)

/* 8.	FizzBuzz – napraviti varijablu broj, ako je broj djeljiv sa 3 onda da ispiše u konzoli „Fizz“, ako je broj djeljiv sa 5 onda da ispiše u konzoli „Buzz“, ako je broj djeljiv sa 3 i sa 5 onda da ispiše „Fizz Buzz“, ako broj nijde djeljiv ni sa 3 ni sa 5 onda da vrati „Broj nije djeljiv ni sa 3 ni sa 5“ */
//Uradili na predavanju

var broj = 15

function fizz(f){
	if(f % 3 == 0 && f % 5 == 0){
  	console.log(f + " je Fizz Buzz")
  }
  else if(f % 3 == 0){
  	console.log(f + " je Fizz")
  }
  else if(f % 5 == 0){
  	console.log(f + " je Buzz")
  }
  else{
  	console.log(f + " Nije nista")
  }
}
fizz(broj)

/* 9.	Napraviti varijablu sekunde, dati neku vrijednost. Pretvoriti te sekunde u dane, sate, minute I sekunde I ispisati dobijeni rezultat u konzoli. Npr. */

var sekundeUnos = 888555

function pretvaranje(s) {
    s  = Math.floor(sekundeUnos / (60 * 60 * 24))
    console.log(s + " dana")
    s = Math.floor((sekundeUnos % (60 * 60 * 24)) / 3600)
    console.log(s + " sati")
    s = Math.floor((sekundeUnos % 3600) / 60)
    console.log(s + " minuta")
    s = Math.floor(sekundeUnos % 60)
    console.log(s + " sekundi")
}

pretvaranje(sekundeUnos)