// import { useState } from "react";
import CountryCard from "./CountryCard";
import '../../App.css';

const Country = ({ countries, handleVisitedCountries, removeVisitedCountry }) => {
    return (
        <>
            <div className="countries-Container">
                {countries.map((country) => (
                    <CountryCard country={country} handleVisitedCountries={handleVisitedCountries} removeVisitedCountry={removeVisitedCountry}></CountryCard>
                ))}
            </div>
        </>
    );
};

export default Country;