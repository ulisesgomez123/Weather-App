import React, { useState } from "react";
import j from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className={j.inputSearchBar}
        type="text"
        placeholder="   Enter City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Search" className={j.btn}/>
    </form>
  );
}
