import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose,onDelete}) {
  
  if(cities){
    return (
      <div className='cards'>
        {cities.map((c) => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            idHash={c.idHash}
            onDelete={onDelete}    
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
