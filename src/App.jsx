// import { use } from 'react';
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries'


function App() {
  const fetchData = fetch('https://openapi.programming-hero.com/api/all').then((res) => res.json());
  return (
    <>
      <Suspense fallback={<h1 className="countries-title">Loading...</h1>}>
        <Countries fetchData={fetchData}></Countries>
      </Suspense>
    </>
  )
}

export default App
