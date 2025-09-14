import './App.css';
import soldItems from './helpers/soldItems.js';
import boughtItems from './helpers/boughtItems.js';
import toSellItems from './helpers/ToSellItems.js';
import nameTv from './helpers/nameTv.js';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import priceTV from "./helpers/priceTV.js";
import screenSizesTV from "./helpers/screenSizesTV.js";
import checkIcon from '../src/assets/check.png';
import minusIcon from '../src/assets/minus.png';


function App() {

    const handleButtonClick = (buttonText) => {
        console.log(buttonText);
    };

    return (
        <div className="app">
            <div>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
            </div>
            <div className="sellOverview">
                <div className='soldItems'>
                    <p>Aantal verkochte producten</p>
                    <p>{soldItems()}</p>
                </div>
                <div className='boughtItems'>
                    <p>Aantal verkochte producten</p>
                    <p>{boughtItems()}</p>
                </div>
                <div className='ToSellItems'>
                    <p>Aantal verkochte producten</p>
                    <p>{toSellItems()}</p>
                </div>
            </div>
            <div>
                <h2>Best verkochte tv</h2>
            </div>
            <div className='bestSellingTv'>
                <img src={bestSellingTv.sourceImg} alt="TV foto" style={{height: '250px'}}/>
                <div className='bestSellingTvInfo'>
                    <h2>{nameTv(bestSellingTv)}</h2>
                    <p>{priceTV(bestSellingTv)}</p>
                    <p>{screenSizesTV(bestSellingTv)}</p>
                    <p><img src={checkIcon} alt="Aanwezig" style={{height: '15px'}}/> wifi <img src={minusIcon} alt="Afwezig" style={{height: '15px'}}/> speech <img src={checkIcon} alt="Aanwezig" style={{height: '15px'}}/> hdr <img src={checkIcon} alt="Aanwezig" style={{height: '15px'}}/> bluetooth <img src={minusIcon} alt="Afwezig" style={{height: '15px'}}/> ambilight</p>
                </div>
            </div>
            <h2>Alle tvs</h2>
            <div className='sortedButtons'>
                <button onClick={() => handleButtonClick('Je hebt gekozen voor meest verkocht eerst')}>Meest verkocht eerst</button>
                <button onClick={() => handleButtonClick('Je hebt gekozen voor goedkoopste eerst')}>Goedkoopste eerst</button>
                <button onClick={() => handleButtonClick('Je hebt gekozen voor meest geschikt voor sport eerst')}>Meest geschikt voor sport eerst</button>
            </div>
        </div>
    )
}

export default App
