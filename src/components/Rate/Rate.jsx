import React from 'react'
import './Rate.scss';

function fixedNumber(number) {
  return Math.ceil(number).toFixed(2);
}

const Rate = ({rates}) => {

  return (
    <div className='rate'>
      <ul className='rate__list'>{rates.map(item => (
        <li
          key={item.buy}
          className='rate__list__item'
        >
          {item.ccy}: {fixedNumber(item.buy)} / {fixedNumber(item.sale)}
        </li>
      ))}
      </ul>
    </div>

  )
}

export default Rate;