import soldItems from './soldItems.js';
import boughtItems from './boughtItems.js';

function toSellItems() {
    const sold = soldItems();
    const bought = boughtItems();
    console.log(bought - sold);
    return bought - sold;
}

export default toSellItems;