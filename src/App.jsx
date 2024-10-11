import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="center">
      <div className="app">
        <h1>Pokémon Search</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <PokemonList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default App;
