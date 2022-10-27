import React from 'react';
import j from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className={j.cards}>
    <div className={j.info}> 👉 If you want more information about your city, click on its name 👈</div>
      {cities.map(c => <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
