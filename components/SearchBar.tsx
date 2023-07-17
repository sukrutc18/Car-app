"use client"
import SearchManufacturer from "./SearchManufacturer"
import { useState } from "react";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = 
    useState('');
    
    const handleSearch= () => {}
  return (
    <form className="SearchBar" 
    onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer

            />
        </div>
    </form>

  )
}

export default SearchBar