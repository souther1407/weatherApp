import React,{useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

export default function App() {


  const [cities,setCities] = useState([])

  const APIKEY = process.env.REACT_APP_APIKEY
  console.log(APIKEY)
  
 
  function addCity(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            idHash: cities.length,
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City not found");
        }
      });

    }

  function deleteCity(idHash){
    
    const filtrado = cities.filter(city =>city.idHash !== idHash)
    setCities([...filtrado])
  }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={addCity} />
      <Cards cities={cities} onDelete={deleteCity}/>
    </div>
  );
}
