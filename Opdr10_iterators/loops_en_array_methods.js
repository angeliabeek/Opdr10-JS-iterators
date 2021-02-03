const colors = ["yellow", "blue", "red", "orange"];
let i = 0;

// while loop
while (colors[i]) {
    console.log(colors[i]);
    i++
};

// for loop
for (let i = 0; i < (colors.length); i++) {
    console.log(colors[i]);
};

// bron Winc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
colors.forEach(color => console.log(color));

// bron: https://www.w3schools.com/js/js_array_iteration.asp
colors.forEach(colorArray);
function colorArray(value) {
    console.log(value);
};

/* vragen:
1- Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    for loop: 3 regels      while loop: 4 regels
2- Hoeveel regels neemt mijn forEach method in beslag?
    forEach method bron Winc: 1 regel
    forEach method w3schools: 1 regel + 3 regels function
3- Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    De variabele i is niet nodig bij de array method forEach, dus is compacter.
    Makkelijker leesbaar vind ik de array method door het ontbreken van de i.
4- Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
    45 properties van een object kan je console.loggen met een for/in loop. Bron: https://www.w3schools.com/js/js_loop_forin.asp
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?   
    Opvallend is dat de for/in loop de object properties zo vaak herhaalt als dat er properties zijn. Dus 5 properties, 5 keer hele rij herhalen. Ik denk dat je het hele object herhaalt, maar niet de individuele properties en dus niet itereert.
*/
const person = {
    firstName: "Merel",
    lastName: "de Vries",
    age: 18,
    siblings: 2,
    domicilie: "Amsterdam"
};

for (const property in person) {
    console.log(person);
};
