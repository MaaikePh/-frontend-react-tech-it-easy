import {inventory} from '../constants/inventory.js'

function boughtItems() {
    let totalInventoryBought = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalInventoryBought = totalInventoryBought + inventory[i].originalStock;
    }

    console.log(totalInventoryBought)

    return totalInventoryBought;
}

export default boughtItems;