// import React from 'react';

const Country = ({ countries }) => {
    return (
        <>
            <div className="countries-Container">
                {countries.map((country) => (
                    <div className="child-container" key={country.area.area}>
                        <img src={country.flags.flags.png} alt={country.flags.flags.alt} width="100%" />
                        <h3>{country.name.common}</h3>
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
                    </div>
                ))}
            </div>
        </>
    );
};

export default Country;