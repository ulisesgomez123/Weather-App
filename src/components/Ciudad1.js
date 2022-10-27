import React from "react";
import './Ciudad.css';


export default function Ciudad({city}) {
    return (
        <div className="hola">
                <div >
                    <p className="p1">{city.name}:</p>
                    <div >
                        <div className="hola1"><label className="p3">Temperature:</label><p className="p2"> {city.temp} ºC</p></div>
                        <div className="hola1"><label className="p3">Weather:</label><p className="p2">{city.weather}</p></div>
                        <div className="hola1"><label className="p3">Wind:</label><p className="p2"> {city.wind} km/h</p></div>
                        <div className="hola1"><label className="p3">Amount of Clouds:</label><p className="p2">{city.clouds}</p></div>
                        <div className="hola1"><label className="p3">Latitude:</label><p className="p2">{city.latitud}º</p></div>
                        <div className="hola1"><label className="p3">Length:</label><p className="p2">{city.longitud}º</p></div>
                    </div>
            </div>
        </div>
    )
}