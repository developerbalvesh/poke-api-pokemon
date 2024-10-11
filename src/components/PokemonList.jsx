import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ searchTerm }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const promises = res.data.results.map(async (pokemon) => {
          const pokeRes = await axios.get(pokemon.url);
          return {
            name: pokeRes.data.name,
            image: pokeRes.data.sprites.front_default,
          };
        });
        const pokemonData = await Promise.all(promises);
        setPokemonList(pokemonData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPokemonData();
  }, []);

  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="pokemon-list">
        {!filteredList[0] ? (
          <>
            <div className="text-center">
              <img src="/pokeball.png" className="pokeball rotate" alt="" />
              <p className="text-light">Loading...</p>
            </div>
          </>
        ) : (
          <>
            {filteredList.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default PokemonList;
