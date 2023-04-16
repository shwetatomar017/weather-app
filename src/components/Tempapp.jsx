import React, { useEffect, useState } from 'react';

import '../components/css/style.css';
import backimage from "../components/images/backhhh.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const Tempapp = () => {

    const [city, setCity]= useState(null);

    const [search, setSearch]= useState("delhi");

    useEffect( () => {
            const fetchApi = async() =>{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3fffa2266b95b26f1c421307aecd5d86`;
                const response = await fetch(url);
                const resJson = await response.json();
                setCity(resJson.main);
            };
            fetchApi();
        },[search]
    )
       


    return(
    <>
    
    <div className="container-fluid fullbody" style={{ backgroundImage: `url(${backimage})` }}>
        <div className='rw'>
            <div className='Appdiv' >
                <h1>Weather App</h1>

                <div className='col-sm-12  inputdata'>
                    <input type="search" 
                        defaultValue="" 
                        placeholder='Enter City' 
                        className='form-control form-control-lg'
                        onChange={(event)=>{
                            setSearch(event.target.value)
                        }}/>
                </div>

                {!city ? (<p>no data found</p>) :(

<div>
                    <div className='col-sm-12  locationname '>
                    <h2 className='location'>
                    <i class="fa-solid fa-street-view fa-beat"></i> {search}</h2>
                    <h1 className='tempu'>
                      {city.temp}° C
                        </h1>
                    <h3 className='tempu_max'>
                        Min - {city.temp_min} ° C | Max - {city.temp_max}° C
                    </h3>
                </div></div>
                ) }
                
            </div>
        </div>
    </div>
    </>
    )
}


export default Tempapp;