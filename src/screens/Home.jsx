import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import "./PokemonGrid.css";

const Home = () => {
  const { pokemons, isLoading } = useFetchPokemons();
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [favoritePokemons, setFavoritePokemons] = useState(
    localStorage.getItem("favoritePokemons")
      ? JSON.parse(localStorage.getItem("favoritePokemons"))
      : []
  );

  useEffect(() => {
    console.log(favoritePokemons);
  }, []);

  const filteredPokemons = selectedTypes.length
    ? pokemons.filter((pokemon) =>
        selectedTypes.includes(pokemon.category.toLowerCase())
      )
    : pokemons;

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Search setSelectedTypes={setSelectedTypes} />
      <div className="pokemons_container">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            favoritePokemons={favoritePokemons}
            setFavoritePokemons={setFavoritePokemons} // Passa a função para o componente
          />
        ))}
      </div>
    </>
  );
};

export default Home;
