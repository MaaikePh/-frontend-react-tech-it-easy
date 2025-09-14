import { inventory } from './inventory.js';

function showOutcomeInConsole() {

    const tvTypeArray = inventory.map((inventory) => {
        return inventory.type
    });

    console.log(tvTypeArray);

    const outOfStock = inventory.filter((inventory) => {
        return inventory.sold >= inventory.originalStock;
    })

    console.log(outOfStock);

    const specificTypeOfTv = inventory.find((inventory) => {
        return inventory.type === 'NH3216SMART'
    })

    console.log(specificTypeOfTv);

    const suitableForSportViewer = inventory.map((inventory) => {
        return {
            name: inventory.brand + ' ' + inventory.name,
            suitable: inventory.refreshRate >= 100
        };
    })

    console.log(suitableForSportViewer);

    const bigScreenTv = inventory.filter((inventory) => {
        return inventory.availableSizes.some((size) => size >= 65);
    })

    console.log(bigScreenTv);


    const hasambiLight = inventory.filter((inventory) =>
        inventory.options.some((option) => option.name === "ambiLight" && option.applicable === true)
    );

    console.log(hasambiLight);
}

export default showOutcomeInConsole;