import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {

  const [city,setCity] = useState("")
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="City..."
        onChange={(e)=>{setCity(e.target.value)}}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
