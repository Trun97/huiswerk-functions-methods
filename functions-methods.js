// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// variabele.substring(5) = index 5 t/m string.length
// variabele.indexOf("@");


// function getEmailDomain (mail){
//     let emailAdres = mail;
//     let theSpot = emailAdres.indexOf("@");
//     return emailAdres.substring(theSpot);
// }
// console.log(getEmailDomain("n.eeken@novi-education.nl"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// novi domein heeft (medewerker)
// novi-education domein (student)
// extern domein (zoals gmail of outlook)

function typeOfMail(mail){
    let emailAdres = mail;
    let theSpot = emailAdres.indexOf("@");
    let domain = emailAdres.substring(theSpot);
    if (domain.includes("novi-education")){
        return "student";
    }else if (domain.includes("novi") && domain.length ===5) {
        return "medewerker";
    }else return "extern domein";
}
console.log(typeOfMail("t.mellink@novi.nl")) // dit gaat niet helemaal goed, niet genoeg tijd om te fine-tunen, laatste oefening gaat ook niet lukken,
//iets te laat aan mn huiswerk begonnen ben ik bang. Leuke oefeningen, zal het zeker nog afmaken, ook de extra
//oefeningen, alvast bedankt voor het nakijken!


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in