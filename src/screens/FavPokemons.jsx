import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";

import "./FavPokemons.css";

const FavPokemons = () => {
  const [favoritePokemons, setFavoritePokemons] = useState(
    localStorage.getItem("favoritePokemons")
      ? JSON.parse(localStorage.getItem("favoritePokemons"))
      : []
  );

  return (
    <div className="fav_container">
      <h2>Pokémons Capturados:</h2>
      {favoritePokemons.length > 0 ? (
        <div className="pokemons_container">
          {favoritePokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              favoritePokemons={favoritePokemons}
              setFavoritePokemons={setFavoritePokemons} // Passa a função para o componente
            />
          ))}
        </div>
      ) : (
        <p>Nenhum pokémon foi capturado!</p>
      )}
    </div>
  );
};

export default FavPokemons;
