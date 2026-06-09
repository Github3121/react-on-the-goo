// import React from 'react';
import { use } from 'react';
import '../../App.css';

const Countries = ({fetchData}) => {
    const useData = use(fetchData);
    const countries = useData.countries;
    console.log(countries);
    return (
        <>
            <h1 className="countries-title">Countries</h1>
            <p className='lengthShow'>{countries.length} countries found.</p>
        </>
    );
};

export default Countries;