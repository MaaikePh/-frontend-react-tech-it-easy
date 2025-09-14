// Opdracht 2c: Maak een helperfunctie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format:
//
//     [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.

//     Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Rond altijd af op hele centimeters. Test goed of dit werkt met verschillende tv's!

function screenSizesTV(tv) {

    const sizes = Array.isArray(tv.availableSizes) ? tv.availableSizes : [tv.availableSizes];

    let sizeString = []

    for (let i = 0; i < sizes.length; i++) {
        const cm = Math.round(sizes[i] * 2.54)
        sizeString.push(`${sizes[i]} inches (${cm} cm)`);
    }

    return sizeString.join(' | ');
}

export default screenSizesTV;