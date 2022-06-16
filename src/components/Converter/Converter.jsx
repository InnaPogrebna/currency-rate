import React, {useState, useEffect,} from 'react';
import './Converter.scss';

const Converter = ({valuta}) => {
  const [typeCurrency, setTypeCurrency] = useState('UAH');
  const [amount, setAmount] = useState('');
  const [convertAmount, setConvertAmount] = useState('');
  const [typeCurrencyConvert, setTypeCurrencyConvert] = useState('');

  const handleChange = (setInput, event) => {
    setInput(event.target.value);
  }

  useEffect(() => {
      switch(typeCurrency){
        case 'UAH':
          switch(typeCurrencyConvert) {
            case 'UAH':
            setConvertAmount(+amount);
            break;
          case 'USD':
            setConvertAmount((+amount / +valuta.USD.buy).toFixed(2));
            break;
          case 'EUR':
            setConvertAmount((+amount / +valuta.EUR.buy ).toFixed(2));
            break;
          default:
            break;
        }
        break;
        case 'USD':
          switch(typeCurrencyConvert) {
            case 'UAH':
            setConvertAmount((+valuta.USD.buy * +amount).toFixed(2));
            break;
          case 'USD':
            setConvertAmount(+amount);
            break;
          case 'EUR':
            setConvertAmount(((+valuta.USD.buy / +valuta.EUR.buy) * (+amount)).toFixed(2));
            break;
          default:
            break;
        }
        break;
        case 'EUR':
          switch(typeCurrencyConvert) {
            case 'UAH':
            setConvertAmount((+valuta.EUR.buy * +amount).toFixed(2));
            break;
          case 'USD':
            setConvertAmount(((+valuta.EUR.buy / +valuta.USD.buy) * (+amount)).toFixed(2));
            break;
          case 'EUR':
            setConvertAmount(+amount);
            break;
          default:
            break;
        }
        break;
        default:
        break;
    }
  }, [amount, typeCurrency, typeCurrencyConvert])

  const changeSelect = () => {
    setTypeCurrencyConvert(typeCurrency);
    setTypeCurrency(typeCurrencyConvert);
  }

  return (
    <section className='converter'>
      <div className='converter__block'>
        <input
          type='number'
          value={amount}
          onChange={(value) => handleChange(setAmount, value)}
          className='converter__input'
        />
        <select
          value={typeCurrency}
          onChange={(value) => handleChange(setTypeCurrency, value)}
          className='converter__select'
        >
          <option value='UAH'>
            UAH
          </option>
          <option value='USD'>
            USD
          </option>
          <option value='EUR'>
            EUR
          </option>
        </select>
      </div>
      <button className='converter__img' onClick={changeSelect}>
        <img src='./image/arrows.svg'
          alt="arrows"
        />
      </button>
      <div className='converter__block'>
        <input
          type='number'
          value={convertAmount}
          className='converter__input'
          readOnly
        />
        <select
          value={typeCurrencyConvert}
          className='converter__select'
          onChange={(value) => handleChange(setTypeCurrencyConvert, value)}
        >
          <option value='UAH'>
            UAH
          </option>
          <option value='USD'>
            USD
          </option>
          <option value='EUR'>
            EUR
          </option>
        </select>
      </div>
  </section>
  )
}

export default Converter;
