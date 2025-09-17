import './App.css';
import soldItems from './helpers/soldItems.js';
import boughtItems from './helpers/boughtItems.js';
import toSellItems from './helpers/ToSellItems.js';
import nameTv from './helpers/nameTV.js';
import {bestSellingTv, inventory} from './constants/inventory.js';
import priceTV from './helpers/priceTV.js';
import screenSizesTV from './helpers/screenSizesTV.js';
import checkIcon from '../src/assets/check.png';
import minusIcon from '../src/assets/minus.png';

// import showOutcomeInConsole from './constants/oefenbestand.js';

function App() {
    // showOutcomeInConsole();
    // return null;

    const handleButtonClick = (criteria) => {
        let sorted = [...inventory];

        if (criteria === 'meest verkocht') {
            sorted.sort((a, b) => b.sold - a.sold);
        } else if (criteria === 'goedkoopste eerst') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (criteria === 'meest geschikt voor sport') {
            sorted.sort((a, b) => b.refreshRate - a.refreshRate);
        }

        console.log(`Gesorteerd op: ${criteria}`);
        console.log(sorted);
    };

    return (
        <div className='app'>
            <div>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
            </div>
            <div className='sell-overview'>
                <div className='sold-items'>
                    <p>Aantal verkochte producten</p>
                    <p className='number-of-sold-items'>{soldItems()}</p>
                </div>
                <div className='bought-items'>
                    <p>Aantal verkochte producten</p>
                    <p className='number-of-sold-items'>{boughtItems()}</p>
                </div>
                <div className='to-sell-items'>
                    <p>Aantal verkochte producten</p>
                    <p className='number-of-sold-items'>{toSellItems()}</p>
                </div>
            </div>
            <div>
                <h2>Best verkochte tv</h2>
            </div>
            <div className='best-selling-tv'>
                <img src={bestSellingTv.sourceImg} alt="Tv foto" style={{height: '250px'}}/>
                <div className='best-selling-tv-info'>
                    <h2>{nameTv(bestSellingTv)}</h2>
                    <p className='price-tv'>{priceTV(bestSellingTv)}</p>
                    <p className='screen-size-tv'>{screenSizesTV(bestSellingTv)}</p>
                    <p><img src={checkIcon} alt='Aanwezig' style={{height: '0.9375rem'}}/> wifi <img src={minusIcon}
                                                                                                     alt='Afwezig'
                                                                                                     style={{height: '15px'}}/> speech <img
                        src={checkIcon} alt='Aanwezig' style={{height: '0.9375rem'}}/> hdr <img src={checkIcon}
                                                                                                alt='Aanwezig'
                                                                                                style={{height: '15px'}}/> bluetooth <img
                        src={minusIcon} alt='Afwezig' style={{height: '0.9375rem'}}/> ambilight</p>
                </div>
            </div>
            <h2>Alle tvs</h2>
            <div className='sorted-buttons'>
                <button onClick={() => handleButtonClick('meest verkocht')}>Meest verkocht
                    eerst
                </button>
                <button onClick={() => handleButtonClick('goedkoopste eerst')}>Goedkoopste eerst
                </button>
                <button onClick={() => handleButtonClick('meest geschikt voor sport')}>Meest
                    geschikt voor sport eerst
                </button>
            </div>
            <ul>
                {inventory.map((inventory) => {
                    return <li key={inventory.brand}>{inventory.brand}</li>
                })}
            </ul>
            <div className='all-tvs'>
                {inventory.map((tv, index) => (
                    <div key={index} className='tv-card'>
                        <img src={tv.sourceImg} alt={tv.name} style={{height: '15.625rem'}}/>
                        <div className='tv-info'>
                            <h2>{nameTv(tv)}</h2>
                            <p className='price-tv'>{priceTV(tv)}</p>
                            <p className='screen-size-tv'>{screenSizesTV(tv)}</p>
                            <ul>
                                {tv.options.map((option, optIndex) => (
                                    <li key={optIndex}>{option.applicable ?
                                        <img src={checkIcon} alt='Aanwezig' style={{width: '0.9375rem'}}/> : <img
                                            src={minusIcon} alt='Afwezig'
                                            style={{width: '0.9375rem'}}/>}{option.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App