import './App.css';
import soldItems from './helpers/soldItems.js';
import boughtItems from './helpers/boughtItems.js';
import toSellItems from "./helpers/ToSellItems.js";

function App() {

    return (
        <div>
            <div>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
            </div>
            <div className="sellOverview">
                <div className={'soldItems'}>
                <p>Aantal verkochte producten</p>
                <p>{soldItems()}</p>
                </div>
                <div className={'boughtItems'}>
                    <p>Aantal verkochte producten</p>
                    <p>{boughtItems()}</p>
                </div>
                <div className={'ToSellItems'}>
                    <p>Aantal verkochte producten</p>
                    <p>{toSellItems()}</p>
                </div>
            </div>
        </div>
    )
}

export default App
