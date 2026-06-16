// import React from 'react';
import { use, useState } from 'react';
import '../../App.css';
import Country from '../country/Country';


const Countries = ({ fetchData }) => {
    const useData = use(fetchData);
    const countries = useData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        setVisitedCountries([...visitedCountries, country]);
    };
    const removeVisitedCountry = (country) => {
        setVisitedCountries(visitedCountries.filter((c) => c !== country));
    }
    return (
        <div className="fractal-background">
            <h1 className="countries-title">Countries</h1>
            <p className='lengthShow'>{countries.length} found | {visitedCountries.length} visited</p>
            <p style={{textAlign: 'center'}}>
                {visitedCountries.join(' | ')}
            </p>
            <Country key={countries.ccn3} countries={countries} handleVisitedCountries={handleVisitedCountries} removeVisitedCountry={removeVisitedCountry}/>
        </div>
    );
};

export default Countries;