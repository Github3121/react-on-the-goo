import { useState } from 'react';
import '../../App.css';

const CountryCard = ({ country, handleVisitedCountries, removeVisitedCountry }) => {
    const [visited, setVisited] = useState(false);
    return (
        <>
            <div className={`countries-container child-container ${visited ? 'visited' : 'not-visited'}`} onClick={() => {
                setVisited(!visited);
                `${!visited ? handleVisitedCountries(country.name.common) : removeVisitedCountry(country.name.common)}`;
            }} key={country.area.area}>
                <img style={{ borderRadius: '5px' }} src={country.flags.flags.png} alt={country.flags.flags.alt} width="100%" />
                <h2>{country.name.common}</h2>
                <p className="country-info">
                    <span>CCN Code: {country.ccn3.ccn3}</span>
                    <span className="bold"> | </span>
                    <span>Population: {country.population.population}</span>
                    <span className="bold"> | </span>
                    <span>Region: {country.region.region}</span>
                    <span className="bold"> | </span>
                    <span>Capital: {country.capital.capital}</span>
                    <span className="bold"> | </span>
                    <span>Area: {country.area.area} km<sup>2</sup></span>
                    <span className="bold"> | </span>
                    <span>
                        Language: {Object.values(country?.languages?.languages || {}).join(', ')}
                    </span>
                    <span className="bold"> | </span>
                    <span>
                        Currency: {
                            Object.values(country?.currencies?.currencies || {}).map((curr, index) => (
                                <span key={index}>
                                    {curr.name} ({curr.symbol})
                                </span>
                            ))
                        }
                    </span>
                </p>
                <button className={`${visited ? 'visited-button' : 'button'}`} onClick={() => setVisited(!visited)}>
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
            </div>
        </>
    );
};

export default CountryCard;