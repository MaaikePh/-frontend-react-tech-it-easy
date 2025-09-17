import {inventory} from '../constants/inventory.js'

function soldItems() {
    let totalInventorySold = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalInventorySold = totalInventorySold + inventory[i].sold;
    }

    console.log(totalInventorySold)

    return totalInventorySold;
}

export default soldItems;