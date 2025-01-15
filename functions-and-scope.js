// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// stap 1: loop alle cijfers langs met een loop
// stap 2: if statement, 8 of hoger uit laten vallen
// stap 3: uitval in een array opvangen
// stap 4: array.length = aantal cum laude afgestudeerden
// * Hoe kan ik iedere waarde van de array checken op deze conditie? met een IF statement
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? loop loopt tot grades.length
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden? doen we in een array.

// let cumLaudeGrades = [];
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= 8) {
//             cumLaudeGrades.push(grades[i]);
//         }
//     }
//     const numOfCumLaudeStudents = cumLaudeGrades.length;
//     console.log(numOfCumLaudeStudents);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

// function cumLaude (array) {
//     let cumLaudeGrades = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= 8) {
//             cumLaudeGrades.push(array[i]);
//         }
//     }
//     return cumLaudeGrades.length;
// }
// console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// let sumOfGrades = 0;
// let averageGrade = 0;
// for (let i = 0; i < grades.length; i++) {
//     sumOfGrades += grades[i];
//     averageGrade = sumOfGrades/grades.length;
// }
// console.log(averageGrade); // hier heb ik wel hulp bij gehad. In mijn originele code
// had ik "sumOfGrades += i;" staan waardoor ik niet de verwachte uitkomst kreeg. Kon de fout niet zelf vinden
// Heb mn code door chatgpt gehaald om te kijken waar de fout zat.

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4

// function averageGrade (array) {
//     let sumOfgrades = 0;
//     for (let i = 0; i < array.length; i++) {
//         sumOfgrades += array[i];
//     }
//     return sumOfgrades/array.length;
// }
// console.log(averageGrade(grades));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!


// function averageGrade (array) {
//     let sumOfgrades = 0;
//     let averageGrades = 0;
//     for (let i = 0; i < array.length; i++) {
//         sumOfgrades += array[i];
//         averageGrades = sumOfgrades/array.length;
//     }
//     return averageGrades.toFixed(2);
// }
// console.log(averageGrade(grades)); //Ook hier hulp gehad. Mijn originele code zag eruit als hieronder.
// //Kreeg .toFixed()" niet op de goede plek. Door chatgpt gehaald om tot het eindresultaat te komen .


// function averageGrade (array) {
//     let sumOfgrades = 0;
//     let averageGrades = 0;
//     for (let i = 0; i < array.length; i++) {
//         sumOfgrades += array[i];
//         averageGrades = sumOfgrades/array.length;
//         averageGrades.toFixed(2);
//     }
//     return averageGrades;
// }
// console.log(averageGrade(grades));


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// let highestGrade = 0;
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > highestGrade) {
//         highestGrade = grades[i];
//     }
// }
// console.log(highestGrade);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade (array) {
    let highestValue = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highestValue) {
            highestValue = array[i];
        }
    }
    return highestValue;
}
console.log(highestGrade([8, 9, 4, 6, 10]))
// console.log(highestGrade);
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
