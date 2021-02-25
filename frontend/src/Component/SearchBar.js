import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

function SearchBar( {handleSubmit} ) {
  const [input, setInput] = useState('');

  return (
    <div className="search">
      {/* This form need to be checked */}
      <input
        required
        id="search__input"
        type="text"
        autoComplete="off"
        placeholder="Find user..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <IconButton onClick={(event) => handleSubmit(input, event)} id="search__button">
        <SearchIcon id="search__icon" />
      </IconButton>
    </div>
  );
}

export default SearchBar;
