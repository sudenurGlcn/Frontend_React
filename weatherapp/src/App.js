import React,{useState} from 'react';
import Wheather from './Wheatherresult';
import './App.css';

function App() {
  const APP_KEY="eb66c46ce2df45919be174043220412";
  let cityinput ="";
  const [wheatherdata,setWheatherdata]=useState([]);
  function citytext()
  {
    document.querySelector("input").addEventListener("input",(e)=>{
      e.preventDefault();
      cityinput = e.target.value;
      console.log(cityinput);

    })
  }
  async function getdata(value){
    if(value ==="") return;
    const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=7&aqi=no&alerts=no`);
    const result = await data.json();
    setWheatherdata(result.forecast.forecastday);
    console.log(result.forecast.forecastday);
    
  }

  return (
    <div >
      <div className='search'>
        <input type='text' placeholder='Enter City Name' onChange={citytext} />
        <button onClick={()=>getdata(cityinput)}>Search</button>
      </div>
      {wheatherdata.map((item)=>(<Wheather key={item.date}   date={item.date} mintemp={item.day.mintemp_c}  maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon} />))}
     
    </div>
  );
}

export default App;
