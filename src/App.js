import React, {useState, useEffect} from 'react';
import './App.scss';
import { TailSpin } from 'react-loader-spinner';
import { getCurrency } from './api/currency';
import Converter from './components/Converter/Converter';
import Rate from './components/Rate/Rate';

const App = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [valuta, setValuta] = useState({});
  
  useEffect(() => {
    setIsLoading(true);
    setInterval(() => {
      getCurrency()
        .then(response => {
          return setRates(response.filter((curr) => curr.ccy === 'USD'
            || curr.ccy === 'EUR'))
      });
      setIsLoading(false);
    }, 1000);
  }, []);

useEffect(() => {
  setValuta({
    'EUR': rates.find(curr => curr.ccy === 'EUR'),
    'USD': rates.find(curr => curr.ccy === 'USD'),
  })
}, [rates])


  return (
    <div className="App">
      <h1 className="App__title">
        {`Currency rate on ${new Date().toLocaleDateString()}`}
      </h1>
      {isLoading
        ? <div className='App__loader'>
            <TailSpin color="blue" width={40} height={40} />
          </div>
        : <Rate rates={rates}/>
      }
        <Converter valuta={valuta}/>
    </div>
  );
}

export default App;
