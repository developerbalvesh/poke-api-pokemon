import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="box1"></div>
      <div className="box3"></div>
      <div className="box4"></div>
      <div className="box5"></div>
      <div className="box6"></div>
      <div
        className="box2"
        style={{ backgroundImage: `url(${pokemon.image})` }}
      ></div>
      <div className="box"></div>
      {/* <img src={pokemon.image} alt={pokemon.name} /> */}
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
